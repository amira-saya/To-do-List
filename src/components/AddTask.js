import React, {useState} from 'react'
import { addTodo } from '../redux/actions'
import {v4 as uuid} from 'uuid'
import {useDispatch} from 'react-redux'


function AddTask() {
    let [name, setName] = useState();
    let  dispatch = useDispatch();
    return (
        <div>
            <h1>Add Task</h1>
            <div className="row m-2">
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="col form-control"/>
                <button onClick={() => 
                     {dispatch(
                        addTodo({
                            id:uuid(),
                            name:name})
                                
                     )
                        setName('');
                     }
                }
                     className="btn btn-primary m-2">Add</button>

            </div>
        </div>
    )
}

export default AddTask