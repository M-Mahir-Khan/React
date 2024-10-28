import React from 'react'

const ChildCompnent = React.memo(
    (props) => {
        console.log("Child Component got re-render again");
        
      return (
        <div>
            <button onClick={props.handleClick}>{props.btnName}</button>
        </div>
      )
    }
)

// React.memo --> Wrap --> Component --> component re-render tabhi hoga jab proops change honge nahi toh re-render nahi hoga

// if you are sending a function then react.memo wont be able save you from re-render

export default ChildCompnent