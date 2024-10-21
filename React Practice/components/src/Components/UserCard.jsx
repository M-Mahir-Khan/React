import React from 'react'
import "./UserCard.css"


const UseCard = (props) => {
  return (
    <div className='user-container'>
      <p id='user-name'>{props.name}</p>
      <img id="user-img" src={props.image} alt={props.image} />
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UseCard