import React, { useState } from 'react'

const Five = () => {
    const [isToggled , setIsToggled] = useState(false)

    function handleToggle(){
        setIsToggled(!isToggled)
    }

    return (
        <div>
            <label>
                <input type="checkbox" onChange={handleToggle}/>
                <h2>{isToggled ? "On": "Off"}</h2>
            </label>
        </div>
    )
}

export default Five