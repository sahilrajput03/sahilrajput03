import { useEffect, useRef, useState } from 'react'
import './App.css'
import { getCurrentTime, getItemsExceptAtIndex, getRandomIndexOfArray } from './utils'

import Markdown from 'react-markdown'
// Rehype plugins
import rehypeRaw from 'rehype-raw'
import rehypeExternalLinks from 'rehype-external-links'
import { useAutoAnimate } from '@formkit/auto-animate/react'

// Import markdown files
import thoughtsMarkdown from './thoughts.md';

// import thoughtsMarkdown from './thoughtsTest.md'; // Use this import for testing purpose.

const thoughts = thoughtsMarkdown?.split('\n\n') || []

const toggleRandomThoughtsTime = 3_000 // 5_000

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const unlistedRandomThoughtsRef = useRef<string[]>(thoughts)
  const [randomThoughts, setRandomThoughts] = useState<string[]>([])

  const [animationRef] = useAutoAnimate()

  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    console.log('>>> [START 🚀] effect')
    let intervalId;
    // Do not schedule interval when we switch to `showAll` view
    if (showAll) {
      console.log('INFO: Since `showAll` is true we do not do anything and simply return.')
      return;
    }

    function addNewRandomThought() {
      // console.log('`addNewRandomThought()` called...')
      console.log('🌟 [FUNCTION CALL] addNewRandomThought() at', getCurrentTime())

      // We clear interval at the start of this function to stop interval execution of `addNewRandomThought()` and also to avoid memory leak.
      if (unlistedRandomThoughtsRef.current.length === 1) {
        console.log('** 🛑 Cleared interval execution with', { intervalId }, 'to prevent memory leaks.')
        clearInterval(intervalId)
      }

      // Remove previous randomThought(s) and set a new randomThought(s)
      // setRandomThoughts(getNewRandomItem(thoughts) as any)

      const i = getRandomIndexOfArray(unlistedRandomThoughtsRef.current)
      const randomThought = unlistedRandomThoughtsRef.current[i]
      unlistedRandomThoughtsRef.current = getItemsExceptAtIndex(unlistedRandomThoughtsRef.current, i)

      setRandomThoughts((prev) => [randomThought, ...prev])
      setIsLoading(false)
    }

    intervalId = setInterval(addNewRandomThought, toggleRandomThoughtsTime)
    console.log(`Execution of addNewRandomThought() every 3 seconds started with`, { intervalId })

    return () => {
      clearInterval(intervalId)
      console.log('<<< [END ✅] cleanup + 🛑 Cleared interval execution with', { intervalId })
    }
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
