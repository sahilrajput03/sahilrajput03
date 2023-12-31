import { useEffect, useState } from 'react'
import './App.css'
import { getRandomItems } from './utils'

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
        const thoughtList = text.split('\n');
        const validThoughts = thoughtList.filter((thought) => !!thought)
        setThoughts(validThoughts)
        setRandomThoughts(getRandomItems(validThoughts, numberOfRandomThoughts) as any)
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
      <button style={{ marginBottom: 50 }} onClick={toggleShowAll}>{!showAll ? "Show all 🚀" : "Show random 😍"}</button>

      {showAll && thoughts.map((thought) => <li>{thought}</li>)}
      {!showAll && randomThoughts.map((thought) => <li>{thought as string}</li>)}

      <br />
      Thankyou
    </>
  )
}

export default App
