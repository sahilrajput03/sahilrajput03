import { useEffect, useState } from 'react'
import './App.css'
import { getRandomItems } from './utils'

import Markdown from 'react-markdown'
// Rehype plugins
import rehypeRaw from 'rehype-raw'
import rehypeExternalLinks from 'rehype-external-links'

const baseUrl = '/thoughts-principles-react/dist'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [thoughts, setThoughts] = useState<string[]>([])
  const [randomThoughts, setRandomThoughts] = useState([])
  console.log('randomThoughts?', randomThoughts);

  const [showAll, setShowAll] = useState(false)

  const numberOfRandomThoughts = 2
  const toggleRandomThoughtsTime = 15_000 // 5_000

  useEffect(() => {
    fetch(`${baseUrl}/thoughts.md`)
      .then(response => response.text())
      .then((text: string) => {
        const thoughtList = text.split('\n\n');
        setThoughts(thoughtList)
        setRandomThoughts(getRandomItems(thoughtList, numberOfRandomThoughts) as any)
        setIsLoading(false)
      })

    return () => {

    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setRandomThoughts(getRandomItems(thoughts, numberOfRandomThoughts) as any)
    }, toggleRandomThoughtsTime)

    return () => clearTimeout(timer)
  })

  // Do not show anything until contents are loaded
  if (isLoading) { return null }

  const toggleShowAll = () => {
    setShowAll(prev => !prev)
  }

  return (
    <>
      <h1>Thoughts, Principles</h1>
      <button style={{ marginBottom: 50 }} onClick={toggleShowAll}>{!showAll ? "Show all 🚀" : "Show random 🚀"}</button>

      {showAll && thoughts.map((thought) => <Thought thought={thought} />)}
      {!showAll && randomThoughts.map((thought) => <Thought thought={thought} />)}

      <br />

      <div className='footnotes'>
        Source: <a href="https://github.com/sahilrajput03/sahilrajput03/tree/master/thoughts-principles-react">
          Click here
        </a>
      </div>
    </>
  )
}

const Thought = ({ thought }: { thought: string }) => {
  return <Markdown rehypePlugins={[rehypeRaw, () => rehypeExternalLinks({ target: '_blank' })]}>{thought}</Markdown>
}

export default App
