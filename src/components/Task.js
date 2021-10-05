import React from 'react'

const Task = ({task, checkTask, deleteTask}) => {
    return (
        <div className="tasks" style={{display: `${task.completed && 'none'}`}}>
            <h2 className={`${task.checked && "uncompleted"}`}>{task.task}</h2>
            <button className={`check ${task.checked && "uncompleted"}`}
            onClick={() => checkTask(task.id)}
            >{`${task.checked ? 'Uncheck' : 'Check'}`}
            </button>
            <button className="delete"
            onClick={() => deleteTask(task.id)}
            >Delete</button>
        </div>
    )
}

export default Task
