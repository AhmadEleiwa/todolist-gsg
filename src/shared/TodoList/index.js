import { useEffect, useState } from "react"

const TodoList = props => {
    const [todos, setTodos] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5500/api/todo', {
            method:'get',
            
        })
        .then(res => res.json())
        .then(data => setTodos(data.data))
        .catch(err => console.log(err))
    }, [])

    return <div >
        {todos.map((item, index) => {
            return <p key={index}>{item.title}</p>
        })}
    </div>
}

export default TodoList