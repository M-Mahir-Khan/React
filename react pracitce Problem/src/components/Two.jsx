import React, { useState } from 'react'

const Two = () => {
    const [count , setCount] = useState(0)
  return (
    <div>
        <button onClick={()=> setCount(count + 1)}>+</button>
        <h2>Count : {count}</h2>
        <button onClick={()=> setCount(count - 1)}>-</button>
    </div>
  )
}

export default Two