import React, { useEffect, useState } from 'react'

const MultieffectComponent = () => {
    const [count, setCount] = useState(0)
    const [second, setSecond] = useState(0)

    useEffect(()=>{
        console.log("Count Changed", count);
        
    }, [count])
    // side-effect logic will run only when count is changed


    useEffect(()=>{
        const intervelId = setInterval(()=>{
            console.log("SetIntervel Start");
            
            setSecond(prevSecond => prevSecond + 1)
        },1000)

        return () =>{
            console.log("Time to stop");
            
            clearInterval(intervelId)
        }
    },[])
    // it will only run on first render
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=> setCount(count + 1)}>Increment Count</button>
        <h2>Second : {second}</h2>
    </div>
  )
}

export default MultieffectComponent