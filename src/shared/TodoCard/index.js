/**
 * 
 * @param {{title:String, desc:String, status:Boolean}} props 
 * @returns 
 */

import { useState } from "react"

const TodoCard = props => {
    const [data, setData] = useState({
        title: props.title,
        desc: props.desc,
        status: props.status,

    })

    const changeHandler = e => {
        let name = e.target.name
        let value = e.target.value
        console.log(name)
        console.log(data)
        setData(p => {
            return { ...p, [name]: value }
        }
        )
    }
    const checkHandler = e => {
        setData(p => {
            return { ...p, status: !p.status }
        }
        )
    }
    const onSubmitHandler = e => {
        e.preventDefault()
        fetch('http://localhost:5500/api/todo/' + props.id, {
            method: 'put',
            body: JSON.stringify({ ...data }),
            headers: {
                "Content-Type": "application/json",
            }
        })
    }
    const onDeleteHandler = e =>{
        props.onDelete(props.id)
    }

    return <form
        onSubmit={onSubmitHandler}
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '4em',
            border: '1px solid #afafaf',
            padding: '1em'
        }}
    >
        <input name="title" onInput={changeHandler} value={data.title} />
        <input name="desc" onInput={changeHandler} value={data.desc} />
        <input name="status" onChange={checkHandler} type={'checkbox'} checked={data.status} />
        <button>save</button>
        <p style={{cursor:'pointer'}} onClick={onDeleteHandler}>X</p>
    </form>
}

export default TodoCard