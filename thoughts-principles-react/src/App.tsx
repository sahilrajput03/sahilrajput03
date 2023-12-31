import { useEffect, useState } from 'react'
import './App.css'
import { getRandomThought, thoughtsData } from './utils'

import Markdown from 'react-markdown'
// Rehype plugins
import rehypeRaw from 'rehype-raw'
import rehypeExternalLinks from 'rehype-external-links'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const baseUrl = '/thoughts-principles-react/dist'

const toggleRandomThoughtsTime = 15_000 // 5_000

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [thoughts, setThoughts] = useState<string[]>([])
  const [randomThoughts, setRandomThoughts] = useState([])
  // console.log('randomThoughts?', randomThoughts);

  const [animationRef] = useAutoAnimate()

  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    fetch(`${baseUrl}/thoughts.md`)
      .then(response => response.text())
      .then((text: string) => {
        const thoughtList = text.split('\n\n');
        thoughtsData.list = [...thoughtList] as any

        setThoughts(thoughtList)
        setRandomThoughts([getRandomThought()] as any)
        setIsLoading(false)
      })

    return () => {

    }
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
  if (isLoading) { return null }

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
