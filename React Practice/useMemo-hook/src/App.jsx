
// import { useState } from 'react'
// import './App.css'
// import { useMemo } from 'react';

// function App() {

//   const [count, setCount] = useState(0)
//   const [input, setInput] = useState(0)

//   function expensiveTask(input){
//     console.log("inside expensive task");
//     for(let i = 0; i <= 100000000; i++){}
//     return input * 2
//   }

//   let doubleVal = useMemo(()=> expensiveTask(input), [input])

//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <div>
//         Count : {count}
//       </div>

//       <input
//         type="number"
//         placeholder='enter number'
//         value={input}
//         onChange={(e)=> setInput(e.target.value)}
//       />
//       <div>
//         Double : {doubleVal}
//       </div>
//     </>
//   )
// }

// export default App

import React, { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // Expensive calculation
  const expensiveValue = useMemo(() => {
    console.log("Calculating...");
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    return sum;
  }, [count]); // Calculation sirf 'count' ke change hone par chalegi

  return (
    <div>
      <h1>Expensive Value: {expensiveValue}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherState(otherState + 1)}>Change Other State</button>
    </div>
  );
}

export default App;
