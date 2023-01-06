import { useEffect, useState } from "react"

//1. useEffect(callback)
//- Goi callback moi khi component re-render
//- Goi callback sau khi component them element vao DOM
//2. useEffect(callback, [])
//3. useEffect(callback, [deps])

//-----
//1. Callback luon duoc goi sau khi component mounted

function Content(){
    const [title, setTitle] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
            console.log('post', posts);
        })
    })
    
    
    return (
        <div>
            <h1>Hoc ReactJS!</h1>
            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
        </div>
    )
}

export default Content