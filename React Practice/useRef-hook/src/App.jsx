import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  // const [count, setCount] = useState(0)
  // let val = useRef(0)

  // let btnRef = useRef()

  // function handleIncrementClick(){
  //   val.current = val.current + 1
  //   console.log("Value of val:", val.current);
  //   setCount(count + 1)
  // }

  // useEffect(()=>{
  //   console.log("Me firse render ho chuka hu");
  // })

  // function changeColor(){
  //   btnRef.current.style.backgroundColor = "red"
  // }


  const [time, setTime] = useState(0)

  let timeRef = useRef(null)

  function startTime() {
    timeRef.current = setInterval(() => {
      setTime(time => time + 1)
    }, 1000)
  }

  function stopTime() {
    clearInterval(timeRef.current)
    timeRef.current = null
  }

  function resetTime() {
    stopTime()
    setTime(0)
  }


  return (
    <>

      <h1>StopWatch: {time} secondes</h1>
      <button onClick={startTime}>Start</button>
      <br /><br />
      <button onClick={stopTime}>Stop</button>
      <br /><br />
      <button onClick={resetTime}>Reset</button>
      {/* <button ref={btnRef}  onClick={handleIncrementClick}>Increment</button>
    <br />
    <br />

    <button onClick={changeColor}>Change Color of 1st button</button>
    <br />

    <br />
    Count: {count} */}
    </>
  )
}

export default App
