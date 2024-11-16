import React, { useState } from 'react'

const Three = () => {
    const [text , setText] = useState("")
  return (
    <div>
        <input type="text" onChange={(e)=> setText(e.target.value)} placeholder='type something'/>
        <h1>User Input :{text}</h1>
    </div>
  )
}

export default Three