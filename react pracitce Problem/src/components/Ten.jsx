import React, { useState } from 'react'

const Ten = () => {
    const [backgroundColor, setBgColor] = useState("yellow")

    const handleClick = () => {
        const newBgColor = backgroundColor === "yellow" ? 'red' : "yellow"
        setBgColor(newBgColor)
    }
    return (
        <div onClick={handleClick} style={{
            backgroundColor,
            width: "200px",
            height: "200px",
            cursor: "pointer"
        }}>
            click me to change bg color
        </div>
    )
}

export default Ten