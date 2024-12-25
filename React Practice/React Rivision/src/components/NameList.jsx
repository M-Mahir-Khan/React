import React from 'react'
import Person from './Person'

const NameList = () => {
    const persons = [
        {
            id: 1,
            name:"Bruce",
            age:29,
            skill:"React"
        },
        {
            id: 1,
            name:"Clark",
            age:30,
            skill:"Angular"
        },
        {
            id: 1,
            name:"Diana",
            age:20,
            skill:"Vue"
        },
        
    ]
    const personList = persons.map(person => <Person person={person}></Person>)
    return (
        <div>{personList}</div>
    )
}

export default NameList