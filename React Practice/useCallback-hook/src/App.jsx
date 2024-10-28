import { useState } from 'react'
import './App.css'
import ChildCompnent from './Components/ChildCompnent'
import { useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {    
    setCount(count + 1)
  },[count])

  return (
    <>
      <div>
        Count : {count}
      </div>
      <br />
      <button onClick={handleClick}>Increment</button>
      <br /><br />
      <ChildCompnent
        btnName="Click me"
        handleClick={handleClick}
      />
    </>
  )
}

export default App
