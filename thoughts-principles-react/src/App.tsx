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

const toggleRandomThoughtsTime = 8_000 // 8_000

function App() {
  const isComponentMountedRef = useRef<boolean>(false)
  const unlistedRandomThoughtsRef = useRef<string[]>(thoughts)
  const [randomThoughts, setRandomThoughts] = useState<string[]>([])

  const [animationRef] = useAutoAnimate()

  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    console.log('>>> [START 🚀] effect')

    // Do not schedule interval when we switch to `showAll` view
    if (showAll) {
      console.log('INFO: Since `showAll` is true we do not do anything and simply return.')
      return;
    }

    let intervalId;

    function addNewRandomThought() {
      // console.log('`addNewRandomThought()` called...')
      console.log('🌟 [FUNCTION CALL] addNewRandomThought() at', getCurrentTime(), { intervalId })

      // We clear interval at the start of this function to stop interval execution of `addNewRandomThought()` and also to avoid memory leak.
      if (unlistedRandomThoughtsRef.current.length === 1) {
        console.log('** 🛑 Cleared interval execution with', { intervalId }, 'to prevent memory leaks.')
        clearInterval(intervalId)
      }

      const randomIndex = getRandomIndexOfArray(unlistedRandomThoughtsRef.current)
      const randomThought = unlistedRandomThoughtsRef.current[randomIndex]
      unlistedRandomThoughtsRef.current = getItemsExceptAtIndex(unlistedRandomThoughtsRef.current, randomIndex)

      setRandomThoughts((prev) => [randomThought, ...prev])
    }

    const componentHasNotMounted = !isComponentMountedRef.current
    if (componentHasNotMounted) {
      addNewRandomThought()
      isComponentMountedRef.current = true
    } else {
      intervalId = setInterval(addNewRandomThought, toggleRandomThoughtsTime)
      console.log(`Execution of addNewRandomThought() every ${toggleRandomThoughtsTime / 1_000} seconds started with`, { intervalId })
    }

    return () => {
      clearInterval(intervalId)
      console.log('<<< [END ✅] cleanup + 🛑 Cleared interval execution with', { intervalId })
    }
  }, [showAll])

  const toggleShowAll = () => {
    setShowAll(!showAll)
    // TODO: Use below code if you want to clear all random thoughts when we click the "Show random" button
    // When we show random thoughts we clear previous randomThought(s)
    // if (!showAll) {
    //   setRandomThoughts(getNewRandomItem(thoughts) as any)
    // }
  }

  // Do not show anything until contents are loaded
  if (!isComponentMountedRef) { return <div>...</div> }

  return (
    <>
      <h1>Thoughts, Principles</h1>
      <button style={{ marginBottom: 50 }} onClick={toggleShowAll}>{!showAll ? "Show all 🚀" : "Show random 🚀"}</button>

      <div ref={animationRef}>
        {showAll
          ? thoughts.map((thought) => <Thought thought={thought} />)
          : randomThoughts.map((thought) => <Thought key={thought} thought={thought} />)}
      </div>

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
