import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {updateTodo, deleteTodo} from '../redux/actions'


function Task({todo}) {
    let dispatch = useDispatch();
    const [edit, setEdit] = useState(false)
    const [name, setName] = useState(todo.name)
    return (
        <div>
            <div className="row mx-2 align-items-center">
                <div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
                <div className="col">
                    {edit ? <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} /> :<h4>{todo.name}</h4> } </div> 
    <button onClick={() => { dispatch(updateTodo(
        {...todo, name:name}
    )) 
    if (edit) {
        setName(todo.name)
    }
     setEdit(!edit)}} className="btn btn-primary m-2">{edit ? "Update" : "Edit"}</button>
                <button onClick={() => dispatch(deleteTodo(todo.id))} className="btn btn-success m-2">Done</button>
            </div>
        </div>
    )
}

export default Task