import React, {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [task, setTask] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();


        if(!task){
            alert('Please enter the task')
            return
        }

        onAdd(task)

        setTask('')
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <input type="text"
            placeholder="Enter the task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            ></input>
            <button type="submit">Add</button>
        </form>
        
    )
}

export default AddTask
