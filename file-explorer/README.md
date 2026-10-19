# File Explorer

A responsive, static browser UI for managing files on an SFTP server. The frontend calls the `fileExplorerRouter` in the QR Solution backend; `ssh2-sftp-client` runs only in that Node.js backend.

## Run locally

1. In the backend environment, set `SFTP_ALLOWED_HOSTS` to a comma-separated list of exact SFTP hostnames, for example:

   ```text
   SFTP_ALLOWED_HOSTS=sftp.example.com,files.example.net
   ```

   An unset or empty list denies all SFTP hosts. Restart the backend after changing this value.

2. Install backend dependencies and run the backend as usual. The API is mounted at `/api/v1/file-explorer`.
3. Serve this folder on a CORS-allowed origin. For example, from the repository root:

   ```sh
   python3 -m http.server 5173
   ```

4. Open `http://localhost:5173/file-explorer/`. The frontend connects to `https://api-dev.mypot.in/api/v1/file-explorer`.

The backend's existing CORS configuration already permits `http://localhost:5173` and `https://ragatime.github.io`.

## Features

- Browse folders, create an empty file that opens immediately in the editor, create folders, click a file to edit it as text, rename or delete files from the editor or file list, and upload/download files.
- Use the three-dot action menu in the file list or editor to rename, download, or delete files.
- Refresh a folder or reload an open text file to fetch the latest remote contents. Requests use `Cache-Control: no-store`.
- After automatic reconnect, restores the last opened folder and reopens the last file if its editor was open when the page was reloaded.
- Connect with an SFTP password or pasted private key. The last successful connection details, including credentials, are stored in tab-scoped `sessionStorage` so a page reload can reconnect automatically. This browser storage is not encrypted and is readable by scripts running on this origin. Disconnect clears the saved details; closing the tab ends the browser session.
- SFTP session tokens and connected clients exist only in backend memory and expire after 15 minutes of inactivity. Disconnecting closes the session.

## Access and safety

The API currently has no user-login requirement, as requested. The host allowlist limits which SFTP destinations it will connect to, but it is **not user authentication**: anyone who can reach the API and knows valid SFTP credentials for an allowed host can use the file operations. Use HTTPS for the frontend and API outside local development, restrict API network access if appropriate, and do not expose this endpoint publicly unless that access model is acceptable.

Paths are confined to the SFTP account's initial home directory. Recursive folder deletion is supported and irreversible.
