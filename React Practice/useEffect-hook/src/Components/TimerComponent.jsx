import React, { useEffect, useState } from 'react'

const TimerComponent = () => {
    const [second, setSecond] = useState(0)

    useEffect(() => {
        const intervelId = setInterval(() => {
            console.log("setIntervel executed");
            
            setSecond(prevSecond => prevSecond + 1)
        }, 1000)

        return () => {
            console.log("Time to stop");
            
            clearInterval(intervelId)
        }
    }, [])

    return (
        <div>
            <h1>Second : {second} </h1>
        </div>
    )
}

export default TimerComponent