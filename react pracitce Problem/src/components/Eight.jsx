import React, { useState } from 'react'

const Eight = () => {

    const [input, setInput] = useState("")
    const [todos, setTodos] = useState([])

    function addTodo() {

        if (input.trim() !== "") {
            setTodos([...todos, input])
            setInput("")

        }
    }

    function removeTodo(index){
        const updatedTodo = todos.filter((_,i)=>  i !== index)
        setTodos(updatedTodo)
    }


    return (
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => {

                   return <li key={index}>
                        {todo} <button onClick={()=>removeTodo(index)}>Remove</button>
                    </li>
                })}
            </ul>
        </div>
    )

}

export default Eight