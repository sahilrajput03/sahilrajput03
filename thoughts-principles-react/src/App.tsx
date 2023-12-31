import { useEffect, useState } from 'react'
import './App.css'
import { getRandomItems } from './utils'

// https://github.com/remarkjs/react-markdown
import Markdown from 'react-markdown'

// To render html contained in markdown
// Officially recommended by `react-markdown`: source: https://github.com/remarkjs/react-markdown#appendix-a-html-in-markdown
import rehypeRaw from 'rehype-raw'

// To manipulate markdown links AS WELL AS achor tags <a> present in html present in markdown
// I use this plugin so that my markdown links are updated with `target="_blank"`
// Officially recommended by `react-markdown`: source: https://github.com/remarkjs/react-markdown/blob/main/changelog.md#900---2023-09-27
// Library: https://github.com/rehypejs/rehype-external-links
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
      <button style={{ marginBottom: 50 }} onClick={toggleShowAll}>{!showAll ? "Show all 🚀" : "Show random 🚀"}</button>

      {showAll && thoughts.map((thought) => <Thought thought={thought} />)}
      {!showAll && randomThoughts.map((thought) => <Thought thought={thought} />)}

      <br />
      Thankyou
    </>
  )
}

const Thought = ({ thought }: { thought: string }) => {
  return <Markdown rehypePlugins={[rehypeRaw, () => rehypeExternalLinks({ target: '_blank' })]}>{thought}</Markdown>
}

export default App
