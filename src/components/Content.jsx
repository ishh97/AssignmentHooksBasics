import React ,{useContext, useEffect, useState}from 'react'
import { Story } from '../App'
import { ToggleTheme } from '../App'

function Content() {
    const {content, showContent, handleContent} = useContext(Story)
    const [count, setCount] = useState(0)
    const theme = useContext(ToggleTheme) 

    const themeStyle = {
        backgroundColor: theme?"black":"grey",
        color:theme?"grey":"black",
        padding:"2rem",
        margin:"2rem"
      }
    const IncrementLike =() =>{
        setCount(count => count+1)
    }
  return (
    <>
    <div style={themeStyle}>
        <button onClick={handleContent}>Content</button>
        {showContent && <div>{content}</div>}
        <h2>{count}</h2>
        <button onClick={IncrementLike}>Like</button>
    </div>
    

    </>
  )
}

export default Content