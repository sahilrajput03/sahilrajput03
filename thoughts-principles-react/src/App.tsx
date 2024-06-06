import { useEffect, useState } from 'react'
import './App.css'
import { getRandomThought, thoughtsData } from './utils'

import Markdown from 'react-markdown'
// Rehype plugins
import rehypeRaw from 'rehype-raw'
import rehypeExternalLinks from 'rehype-external-links'
import { useAutoAnimate } from '@formkit/auto-animate/react'

// Import markdown files
import thoughts1 from './thoughts1.md';

const toggleRandomThoughtsTime = 1_000 // 5_000

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [thoughts] = useState<string[]>(thoughts1?.split('\n\n') || [])
  const [randomThoughts, setRandomThoughts] = useState([])

  const [animationRef] = useAutoAnimate()

  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    // Make copy of `thoughts`
    thoughtsData.list = [...thoughts] as any
    setRandomThoughts([getRandomThought()] as any)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    // Do not schedule interval when we switch to `showAll` view
    if (showAll) { return; }

    const timer = setInterval(() => {

      // Remove previous randomThought(s) and set a new randomThought(s)
      // setRandomThoughts(getNewRandomItem(thoughts) as any)

      // Append to previous randomThought(s)
      setRandomThoughts((prev) => [getRandomThought(), ...prev] as any)
    }, toggleRandomThoughtsTime)

    return () => clearInterval(timer)
  }, [showAll, thoughts])

  // Do not show anything until contents are loaded
  if (isLoading) { return <div>...</div> }

  const toggleShowAll = () => {
    setShowAll(!showAll)
    // TODO: Use below code if you want to clear all random thoughts when we click the "Show random" button
    // When we show random thoughts we clear previous randomThought(s)
    // if (!showAll) {
    //   setRandomThoughts(getNewRandomItem(thoughts) as any)
    // }
  }

  return (
    <>
      <h1>Thoughts, Principles</h1>
      <button style={{ marginBottom: 50 }} onClick={toggleShowAll}>{!showAll ? "Show all 🚀" : "Show random 🚀"}</button>

      <div ref={animationRef}>
        {showAll
          ? thoughts.map((thought) => <Thought thought={thought} />)
          : randomThoughts.map((thought) => <Thought key={thought} thought={thought} />)}
      </div>

      {<div>
        <h1>TODO <div style={{ color: 'red' }}>(URGENT)</div>: Add new list from below pages here in the "show all" section & also make different markdown files so that below files as well: </h1>
        <li>Office Ethics: <a target='_blank' href="https://github.com/sahilrajput03/sahilrajput03/blob/main/office-ethics.md">Click here</a></li>
        <li>Social Rules: <a target='_blank' href="https://github.com/sahilrajput03/sahilrajput03/blob/main/social-rules.md">Click here</a></li>
        <li>Single Big Mistakes: <a target='_blank' href="https://github.com/sahilrajput03/sahilrajput03/blob/main/single-big-mistake.md">Click here</a></li>

      </div>}

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
