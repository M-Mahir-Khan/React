
import { useState } from 'react'
import './App.css'
import { useMemo } from 'react';

function App() {

  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

  function expensiveTask(input){
    console.log("inside expensive task");
    for(let i = 0; i <= 100000000; i++){}
    return input * 2
    
  }

  let doubleVal = useMemo(()=> expensiveTask(input), [input])

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>
        Count : {count}
      </div>

      <input
        type="number"
        placeholder='enter number'
        value={input}
        onChange={(e)=> setInput(e.target.value)}
      />
      <div>
        Double : {doubleVal}
      </div>
    </>
  )
}

export default App
