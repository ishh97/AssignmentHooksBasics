import { useState, useContext, useEffect } from 'react'
import React from 'react'
import './App.css'
import Content from './components/Content'


export const ToggleTheme = React.createContext()
export const Story = React.createContext()
function App() {

  const [content, setContent] = useState('A quick brown fox jumps over the white lazy dog.')

  const [state, setState] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const handleToggle = () => {
    setState(state => !state)
  }

  const handleContent =() => {
    setShowContent(showContent => ! showContent)
  }

  return (
    <>

      <Story.Provider value={{ content ,showContent, handleContent,}}>
        <ToggleTheme.Provider value={state}>
          <button onClick={handleToggle}>Toggle</button>
        <Content />
        </ToggleTheme.Provider>

      </Story.Provider>
    </>
  )
}

export default App
