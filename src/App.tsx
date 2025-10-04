import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {story } from "./story";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {story.map((entry)=>{
      return <p>{entry}</p>
    })}
    </>
  )
}

export default App
