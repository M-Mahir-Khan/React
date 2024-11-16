import React, { useEffect, useState } from 'react'

const Six = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])
    return (
        <div>
            {data ? (
                <div>
                    <h2>Title : {data.title}</h2>
                    <p>Body: {data.body}</p>
                </div>
            ) : (
                <h2>Loading....</h2>
            )
            }
        </div>
    )
}

export default Six