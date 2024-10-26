import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    function handleClick(){
        navigate('/about')
    }
  return (
    <div onClick={handleClick}>
        Home Page
        <button>Move to About Page</button>
    </div>
    
  )
}

export default Home