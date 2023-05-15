import { useEffect, useState } from "react"
import TodoCard from "../TodoCard"

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


    const onDelete = id =>{
        const x = todos.filter(p => p._id !==id)
        console.log(x)
        setTodos(x)
        fetch('http://localhost:5500/api/todo/'+id, {
            method:'delete',
            
        })

    }
    return <div style={{
        width:'80%',
        margin:'0 auto',
        display:'flex',
        flexDirection:'column',
        gap:'1em'
    }} >
        {todos.map((item, index) => {
            return <TodoCard key={item._id} onDelete={onDelete} id={item._id} title={item.title} desc={item.description} status={item.status} />
        })}
    </div>
}

export default TodoList