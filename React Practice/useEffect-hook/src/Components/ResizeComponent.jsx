import React, { useEffect, useState } from 'react'

const ResizeComponent = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(()=>{
        const handleResize = () => setWindowWidth(window.innerWidth)
        
        window.addEventListener('resize', handleResize)
        

        return () => {
            window.removeEventListener("resize",handleResize)
        }
    },[])

  return (
    <div>
        <h1>Widnow width : {windowWidth}px</h1>
    </div>
  )
}

export default ResizeComponent