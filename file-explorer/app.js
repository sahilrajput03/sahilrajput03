// const API_BASE = 'https://api.mypot.in/api/v1/file-explorer' // for production
const API_BASE = 'https://api-dev.mypot.in/api/v1/file-explorer'
const LAST_CONNECTION_KEY = 'file-explorer-last-connection'
const LAST_VIEW_KEY = 'file-explorer-last-view'

const form = document.querySelector('#connection-form')
const connectionStatus = document.querySelector('#connection-status')
const browserPanel = document.querySelector('#browser-panel')
const fileList = document.querySelector('#file-list')
const breadcrumbs = document.querySelector('#breadcrumbs')
const browserMessage = document.querySelector('#browser-message')
const appMessage = document.querySelector('#app-message')
const emptyState = document.querySelector('#empty-state')
const editorDialog = document.querySelector('#editor-dialog')
const editorMessage = document.querySelector('#editor-message')
const editorTitle = document.querySelector('#editor-title')
const editorContent = document.querySelector('#file-content')
const uploadInput = document.querySelector('#upload-input')

editorDialog.addEventListener('mousedown', event => {
  if (event.target.closest('button, summary')) event.preventDefault()
})

let sessionToken = ''
let homePath = ''
let currentPath = ''
let activeFilePath = ''
let forceTextMode = false
let originalContents = ''
let activeConnection
let saveFeedbackTimer

const moreActionsIcon = '<svg class="more-actions-icon" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="12" cy="19" r="1.8"/></svg>'

function showMessage(element, message, success = false) {
  element.textContent = element === browserMessage && !message ? '\u00a0' : message
  if (element !== browserMessage) element.classList.toggle('hidden', !message)
  element.classList.toggle('success', success)
  element.classList.toggle('loading', element === editorMessage && message === 'Loading file…')
}

function apiUrl(endpoint, query = {}) {
  const url = new URL(`${API_BASE}${endpoint}`)
  for (const [key, value] of Object.entries(query)) url.searchParams.set(key, value)
  return url
}

async function request(endpoint, options = {}, query = {}) {
  const headers = new Headers(options.headers || {})
  if (sessionToken) headers.set('x-sftp-session', sessionToken)
  const response = await fetch(apiUrl(endpoint, query), {
    ...options,
    headers,
    cache: 'no-store'
  })
  if (!response.ok) {
    let message = `Request failed (${response.status}).`
    try {
      const result = await response.json()
      if (result.message) message = result.message
    } catch {}
    throw new Error(message)
  }
  return response
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character])
}

function joinPath(parent, child) {
  return `${parent.replace(/\/+$/, '')}/${child}`
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`
  const units = ['KB', 'MB', 'GB', 'TB']
  let size = bytes / 1024
  let unit = units[0]
  for (let i = 1; size >= 1024 && i < units.length; i++) {
    size /= 1024
    unit = units[i]
  }
  return `${size.toFixed(size < 10 ? 1 : 0)} ${unit}`
}

function formatDate(timestamp) {
  if (!timestamp) return '—'
  const date = new Date(timestamp)
  return Number.isNaN(date.valueOf()) ? '—' : date.toLocaleString()
}

function renderBreadcrumbs() {
  const pathParts = currentPath.split('/').filter(Boolean)
  const points = [{ title: homePath.split('/').filter(Boolean).at(-1) || '/', path: homePath }]
  let path = homePath
  const rootParts = homePath.split('/').filter(Boolean).length
  pathParts.slice(rootParts).forEach(part => {
    path = joinPath(path, part)
    points.push({ title: part, path })
  })
  breadcrumbs.innerHTML = points.map((point, index) => `
    ${index ? '<span aria-hidden="true">/</span>' : ''}
    <button class="breadcrumb${index === points.length - 1 ? ' current' : ''}" type="button" data-path="${escapeHtml(point.path)}">${escapeHtml(point.title)}</button>
  `).join('')
}

function renderEntries(entries) {
  const sorted = [...entries].sort((left, right) =>
    Number(right.isDirectory) - Number(left.isDirectory) || left.name.localeCompare(right.name, undefined, { sensitivity: 'base' })
  )
  fileList.innerHTML = sorted.map(entry => {
    const path = escapeHtml(entry.path)
    const name = escapeHtml(entry.name)
    const modified = escapeHtml(formatDate(entry.modifyTime))
    const size = entry.isDirectory ? '—' : escapeHtml(formatSize(entry.size || 0))
    const icon = entry.isDirectory ? '▰' : '▤'
    return `<tr>
      <td><button class="file-name-button" type="button" data-action="${entry.isDirectory ? 'open' : 'edit-text'}" data-path="${path}" data-name="${name}" data-directory="${entry.isDirectory}">
        <span class="file-icon${entry.isDirectory ? ' directory' : ''}" aria-hidden="true">${icon}</span>
        <span class="file-label">${name}</span>
      </button></td>
      <td><button class="file-meta-button" type="button" aria-label="Open ${name}, modified ${modified}" data-action="edit-text" data-path="${path}" data-name="${name}">${modified}<span class="mobile-file-size">${size}</span></button></td>
      <td><button class="file-meta-button file-size-button" type="button" aria-label="Open ${name}, size ${size}" data-action="edit-text" data-path="${path}" data-name="${name}">${size}</button></td>
      <td><div class="row-actions">
        <details class="action-menu row-action-menu">
          <summary class="action-menu-trigger" aria-label="More actions for ${name}" title="More actions">${moreActionsIcon}</summary>
          <div class="action-menu-items">
            <button class="action-menu-item" type="button" data-action="rename" data-path="${path}" data-name="${name}">Rename</button>
            ${entry.isDirectory ? '' : `<button class="action-menu-item" type="button" data-action="download" data-path="${path}" data-name="${name}">Download</button>`}
            <button class="action-menu-item danger" type="button" data-action="delete" data-path="${path}" data-name="${name}" data-directory="${entry.isDirectory}">Delete</button>
          </div>
        </details>
      </div></td>
    </tr>`
  }).join('')
  emptyState.classList.toggle('hidden', sorted.length !== 0)
}

async function loadDirectory(path = currentPath) {
  showMessage(browserMessage, 'Loading…')
  const refreshButton = document.querySelector('#refresh-button')
  refreshButton.disabled = true
  try {
    const response = await request('/list', {}, { path })
    const entries = await response.json()
    currentPath = path
    renderBreadcrumbs()
    renderEntries(entries)
    saveLastView(path)
    const folderCount = entries.filter(entry => entry.isDirectory).length
    const fileCount = entries.length - folderCount
    showMessage(
      browserMessage,
      `${folderCount} ${folderCount === 1 ? 'folder' : 'folders'}, ${fileCount} ${fileCount === 1 ? 'file' : 'files'}`,
      true
    )
    return true
  } catch (error) {
    showMessage(browserMessage, error.message)
    return false
  } finally {
    refreshButton.disabled = false
  }
}

function setConnected(connected) {
  browserPanel.classList.toggle('hidden', !connected)
  document.querySelector('.connection-card').classList.toggle('hidden', connected)
  form.classList.toggle('hidden', connected)
  connectionStatus.classList.toggle('connected', false)
  connectionStatus.textContent = 'Not connected'
  document.querySelector('.security-note').classList.toggle('hidden', connected)
  const connectedControls = document.querySelector('#connected-controls')
  connectedControls.classList.toggle('hidden', !connected)
  const account = document.querySelector('#connected-account')
  account.textContent = connected ? `${form.elements.username.value}@${form.elements.host.value}` : ''
  document.querySelector('#connect-button').textContent = 'Connect'
  document.querySelector('#connect-button').disabled = connected
}

function saveLastConnection(connection) {
  try {
    sessionStorage.setItem(LAST_CONNECTION_KEY, JSON.stringify(connection))
  } catch (error) {
    console.error('Unable to save the SFTP connection for this tab session.', error)
    showMessage(appMessage, 'Connected, but this browser could not save the connection for automatic reconnect.')
  }
}

function clearLastConnection() {
  try {
    sessionStorage.removeItem(LAST_CONNECTION_KEY)
    sessionStorage.removeItem(LAST_VIEW_KEY)
  } catch (error) {
    console.error('Unable to clear the saved SFTP connection.', error)
    showMessage(appMessage, 'Unable to clear the saved connection from this browser tab.')
  }
}

function getLastView(connection) {
  try {
    const saved = JSON.parse(sessionStorage.getItem(LAST_VIEW_KEY) || 'null')
    if (
      saved?.host === connection.host &&
      saved?.username === connection.username &&
      saved?.port === connection.port &&
      typeof saved.path === 'string'
    ) return saved
  } catch (error) {
    console.error('Unable to read the saved file-explorer location.', error)
    showMessage(appMessage, 'Could not restore the last opened location.')
  }
  return undefined
}

function saveLastView(path, file = null) {
  if (!activeConnection) return
  try {
    sessionStorage.setItem(LAST_VIEW_KEY, JSON.stringify({
      host: activeConnection.host,
      username: activeConnection.username,
      port: activeConnection.port,
      path,
      file
    }))
  } catch (error) {
    console.error('Unable to save the last file-explorer location.', error)
    showMessage(appMessage, 'The last opened location could not be saved.')
  }
}

function isWithinHome(path) {
  return typeof path === 'string' &&
    (path === homePath || path.startsWith(homePath === '/' ? '/' : `${homePath}/`))
}

function restoreConnectionFields(connection) {
  form.elements.host.value = connection.host
  form.elements.port.value = String(connection.port)
  form.elements.username.value = connection.username
  form.elements.authMethod.value = connection.authMethod
  form.elements.password.value = connection.password || ''
  form.elements.privateKey.value = connection.privateKey || ''
  form.elements.passphrase.value = connection.passphrase || ''
  form.elements['authMethod'].dispatchEvent(new Event('change'))
}

async function connectSftp(connection) {
  const button = document.querySelector('#connect-button')
  button.disabled = true
  button.textContent = 'Connecting…'
  showMessage(appMessage, '')

  const body = {
    host: connection.host,
    port: Number(connection.port),
    username: connection.username,
    ...(connection.authMethod === 'password'
      ? { password: connection.password }
      : { privateKey: connection.privateKey, passphrase: connection.passphrase })
  }

  try {
    const response = await fetch(apiUrl('/connect'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      cache: 'no-store'
    })
    const result = await response.json()
    if (!response.ok) throw new Error(result.message || `Connection failed (${response.status}).`)
    sessionToken = result.sessionToken
    homePath = result.root
    currentPath = homePath
    activeConnection = connection
    const lastView = getLastView(connection)
    saveLastConnection(connection)
    form.elements.password.value = ''
    form.elements.privateKey.value = ''
    form.elements.passphrase.value = ''
    setConnected(true)
    const requestedPath = lastView && isWithinHome(lastView.path) ? lastView.path : homePath
    let loaded = await loadDirectory(requestedPath)
    if (!loaded && requestedPath !== homePath) loaded = await loadDirectory(homePath)
    if (
      loaded && lastView?.file &&
      typeof lastView.file.path === 'string' &&
      typeof lastView.file.name === 'string' &&
      isWithinHome(lastView.file.path) &&
      lastView.file.path.slice(0, lastView.file.path.lastIndexOf('/')) === currentPath
    ) {
      await openEditor(lastView.file.path, lastView.file.name, true)
    }
  } catch (error) {
    showMessage(appMessage, error.message)
    button.disabled = false
    button.textContent = 'Connect'
  }
}

document.querySelector('#auth-method').addEventListener('change', event => {
  const useKey = event.target.value === 'privateKey'
  document.querySelector('#password-field').classList.toggle('hidden', useKey)
  document.querySelector('#private-key-field').classList.toggle('hidden', !useKey)
  document.querySelector('#passphrase-field').classList.toggle('hidden', !useKey)
})

document.querySelector('#fill-sample-button').addEventListener('click', () => {
  form.elements.host.value = 'mypot.in'
  form.elements.username.value = 'user1'
})

form.addEventListener('submit', async event => {
  event.preventDefault()
  const values = new FormData(form)
  const connection = {
    host: String(values.get('host')).trim(),
    port: Number(values.get('port')),
    username: String(values.get('username')).trim(),
    authMethod: String(values.get('authMethod')),
    password: String(values.get('password') || ''),
    privateKey: String(values.get('privateKey') || ''),
    passphrase: String(values.get('passphrase') || '')
  }
  await connectSftp(connection)
})

function restoreLastConnection() {
  let saved
  try {
    const serialized = sessionStorage.getItem(LAST_CONNECTION_KEY)
    if (!serialized) return
    saved = JSON.parse(serialized)
  } catch (error) {
    console.error('Unable to read the saved SFTP connection from this browser tab.', error)
    clearLastConnection()
    showMessage(appMessage, 'Could not read the saved connection. Please enter your SFTP details again.')
    return
  }
  if (
    !saved || typeof saved.host !== 'string' || typeof saved.username !== 'string' ||
    !Number.isInteger(saved.port) || !['password', 'privateKey'].includes(saved.authMethod)
  ) {
    clearLastConnection()
    showMessage(appMessage, 'The saved connection details are invalid. Please enter them again.')
    return
  }
  restoreConnectionFields(saved)
  void connectSftp(saved)
}

restoreLastConnection()

document.querySelector('#refresh-button').addEventListener('click', () => loadDirectory(currentPath))

breadcrumbs.addEventListener('click', event => {
  const button = event.target.closest('[data-path]')
  if (button) loadDirectory(button.dataset.path)
})

fileList.addEventListener('click', async event => {
  const button = event.target.closest('[data-action]')
  if (!button) return
  button.closest('.action-menu')?.removeAttribute('open')
  const { action, path, name } = button.dataset
  if (action === 'open') return loadDirectory(path)
  if (action === 'edit') return openEditor(path, name)
  if (action === 'edit-text') return openEditor(path, name, true)
  if (action === 'download') return downloadFile(path, name, button)
  if (action === 'rename') return renameEntry(path, name)
  if (action === 'delete') return deleteEntry(path, name, button.dataset.directory === 'true')
})

document.querySelector('#new-folder-button').addEventListener('click', async () => {
  const name = window.prompt('New folder name')
  if (!name?.trim()) return
  try {
    await request('/directory', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: joinPath(currentPath, name.trim()) })
    })
    await loadDirectory(currentPath)
  } catch (error) {
    showMessage(browserMessage, error.message)
  }
})

document.querySelector('#new-file-button').addEventListener('click', async () => {
  const name = window.prompt('New file name')
  if (!name?.trim()) return
  const filename = name.trim()
  if (filename.includes('/') || filename === '.' || filename === '..') {
    showMessage(browserMessage, 'Enter a file name without folder separators.')
    return
  }
  const path = joinPath(currentPath, filename)
  try {
    await request('/text-file', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path, content: '', create: true })
    })
    await loadDirectory(currentPath)
    await openEditor(path, filename, true)
  } catch (error) {
    showMessage(browserMessage, error.message)
  }
})

document.querySelector('#upload-button').addEventListener('click', () => uploadInput.click())
uploadInput.addEventListener('change', async () => {
  const files = [...uploadInput.files]
  if (!files.length) return
  showMessage(browserMessage, `Uploading ${files.length} ${files.length === 1 ? 'file' : 'files'}…`)
  try {
    for (const file of files) {
      const response = await request('/file', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/octet-stream' },
        body: file
      }, { path: joinPath(currentPath, file.name) })
      await response.json()
    }
    showMessage(browserMessage, `${files.length} ${files.length === 1 ? 'file' : 'files'} uploaded.`, true)
    await loadDirectory(currentPath)
  } catch (error) {
    showMessage(browserMessage, error.message)
  } finally {
    uploadInput.value = ''
  }
})

async function renameEntry(path, oldName) {
  const newName = window.prompt('Rename to', oldName)
  if (!newName?.trim() || newName.trim() === oldName) return
  try {
    await request('/rename', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path, newPath: joinPath(currentPath, newName.trim()) })
    })
    await loadDirectory(currentPath)
  } catch (error) {
    showMessage(browserMessage, error.message)
  }
}

async function deleteEntry(path, name, isDirectory) {
  const warning = isDirectory
    ? `Delete "${name}" and everything inside it? This cannot be undone.`
    : `Delete "${name}"? This cannot be undone.`
  if (!window.confirm(warning)) return
  try {
    await request('/entry', { method: 'DELETE' }, { path })
    await loadDirectory(currentPath)
  } catch (error) {
    showMessage(browserMessage, error.message)
  }
}

function isTextType(contentType, name) {
  const mimeType = (contentType || '').split(';')[0].trim().toLowerCase()
  if (mimeType.startsWith('text/') || ['application/json', 'application/xml', 'application/javascript', 'image/svg+xml'].includes(mimeType)) return true
  return /\.(txt|md|csv|log|json|ya?ml|xml|html?|css|[cm]?js|tsx?|jsx?|py|sh|toml|ini|conf|env|sql|svg)$/i.test(name)
}

async function openEditor(path, name, forceText = false) {
  activeFilePath = path
  forceTextMode = forceText
  originalContents = ''
  editorTitle.textContent = name
  editorContent.value = ''
  editorContent.disabled = false
  document.querySelector('#save-file-button').disabled = true
  document.querySelector('#save-file-button').textContent = 'Save'
  document.querySelector('#reload-file-button').classList.remove('hidden')
  document.querySelector('#download-file-button').classList.remove('hidden')
  showMessage(editorMessage, '')
  editorDialog.showModal()
  saveLastView(currentPath, { path, name })
  try {
    const loaded = await reloadEditorFile()
    if (!loaded) return
  } catch (error) {
    showMessage(editorMessage, error.message)
  }
}

editorDialog.addEventListener('close', () => saveLastView(currentPath))

async function reloadEditorFile() {
  const saveButton = document.querySelector('#save-file-button')
  const reloadButton = document.querySelector('#reload-file-button')
  saveButton.disabled = true
  reloadButton.disabled = true
  reloadButton.classList.add('is-loading')
  reloadButton.setAttribute('aria-label', 'Loading file')
  reloadButton.title = 'Loading file…'
  showMessage(editorMessage, '')
  try {
    const response = await request('/file', {}, { path: activeFilePath })
    const contentType = response.headers.get('content-type')
    if (!forceTextMode && !isTextType(contentType, activeFilePath)) {
      editorDialog.close()
      await downloadFile(
        activeFilePath,
        activeFilePath.split('/').at(-1),
        document.querySelector('#download-file-button')
      )
      return false
    }
    const contents = await response.text()
    editorContent.value = contents
    originalContents = contents
    saveButton.disabled = false
    showMessage(editorMessage, '')
    return true
  } finally {
    reloadButton.disabled = false
    reloadButton.classList.remove('is-loading')
    reloadButton.setAttribute('aria-label', 'Reload file from server')
    reloadButton.title = 'Reload file'
  }
}

document.querySelector('#reload-file-button').addEventListener('click', async () => {
  if (editorContent.value !== originalContents && !window.confirm('Discard your unsaved edits and reload the latest server version?')) return
  try {
    await reloadEditorFile()
  } catch (error) {
    showMessage(editorMessage, error.message)
  }
})

async function renameOpenFile(button) {
  button.closest('.action-menu')?.removeAttribute('open')
  const currentName = activeFilePath.split('/').at(-1)
  const newName = window.prompt('Rename to', currentName)
  if (!newName?.trim() || newName.trim() === currentName) return
  const filename = newName.trim()
  if (filename.includes('/') || filename === '.' || filename === '..') {
    showMessage(editorMessage, 'Enter a file name without folder separators.')
    return
  }

  button.disabled = true
  try {
    const parentPath = activeFilePath.slice(0, activeFilePath.lastIndexOf('/')) || '/'
    const newPath = joinPath(parentPath, filename)
    await request('/rename', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: activeFilePath, newPath })
    })
    activeFilePath = newPath
    editorTitle.textContent = filename
    await loadDirectory(currentPath)
    saveLastView(currentPath, { path: activeFilePath, name: filename })
    showMessage(editorMessage, '')
  } catch (error) {
    showMessage(editorMessage, error.message)
  } finally {
    button.disabled = false
  }
}

document.querySelector('#rename-file-button').addEventListener('click', event => {
  renameOpenFile(event.currentTarget)
})

editorTitle.addEventListener('click', event => {
  renameOpenFile(event.currentTarget)
})

document.querySelector('#delete-file-button').addEventListener('click', async event => {
  event.currentTarget.closest('.action-menu')?.removeAttribute('open')
  const filename = activeFilePath.split('/').at(-1)
  const hasUnsavedChanges = editorContent.value !== originalContents
  const warning = hasUnsavedChanges
    ? `Delete "${filename}"? This cannot be undone. Your unsaved changes will be lost.`
    : `Delete "${filename}"? This cannot be undone.`
  if (!window.confirm(warning)) return

  const button = event.currentTarget
  button.disabled = true
  try {
    await request('/entry', { method: 'DELETE' }, { path: activeFilePath })
    editorDialog.close()
    await loadDirectory(currentPath)
  } catch (error) {
    showMessage(editorMessage, error.message)
  } finally {
    button.disabled = false
  }
})

document.querySelector('#save-file-button').addEventListener('click', async () => {
  const button = document.querySelector('#save-file-button')
  button.disabled = true
  button.classList.remove('saved')
  clearTimeout(saveFeedbackTimer)
  try {
    await request('/text-file', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: activeFilePath, content: editorContent.value })
    })
    originalContents = editorContent.value
    button.classList.add('saved')
    saveFeedbackTimer = setTimeout(() => button.classList.remove('saved'), 1000)
    await loadDirectory(currentPath)
  } catch (error) {
    showMessage(editorMessage, error.message)
  } finally {
    button.disabled = false
  }
})

document.querySelector('#download-file-button').addEventListener('click', event => {
  event.currentTarget.closest('.action-menu')?.removeAttribute('open')
  downloadFile(activeFilePath, activeFilePath.split('/').at(-1), event.currentTarget)
})

async function downloadFile(path, name, button) {
  button?.classList.remove('download-complete')
  if (button) button.title = 'Download'
  try {
    const response = await request('/file', {}, { path })
    const blob = await response.blob()
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = name
    document.body.append(link)
    link.click()
    link.remove()
    setTimeout(() => URL.revokeObjectURL(url), 60000)
    button?.classList.add('download-complete')
    if (button) button.title = 'Downloaded'
  } catch (error) {
    showMessage(browserMessage, error.message)
  }
}

editorDialog.querySelector('.dialog-close-form').addEventListener('submit', event => {
  if (editorContent.value !== originalContents && !window.confirm('Discard your unsaved edits?')) event.preventDefault()
})

document.querySelector('#connection-disconnect-button').addEventListener('click', async () => {
  try {
    await request('/disconnect', { method: 'POST' })
  } catch (error) {
    showMessage(appMessage, error.message)
  } finally {
    sessionToken = ''
    homePath = ''
    currentPath = ''
    activeConnection = undefined
    clearLastConnection()
    fileList.replaceChildren()
    setConnected(false)
  }
})

window.addEventListener('pagehide', () => {
  if (!sessionToken) return
  const headers = new Headers({ 'x-sftp-session': sessionToken })
  fetch(apiUrl('/disconnect'), { method: 'POST', headers, keepalive: true }).catch(() => {})
})
