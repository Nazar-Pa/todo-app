import React from 'react'
import Task from './Task'

const Tasks = ({tasks, checkTask, deleteTask, value}) => {
    
    if(value === "all"){
        tasks = tasks.filter(task => task)
    } else if(value === "completed"){
        tasks = tasks.filter(task => task.checked !== false)    
    } else {
        tasks = tasks.filter(task => task.checked !== true)
    }
    

    return (
        <div>
            {tasks.map((task) => (<Task task={task} key={task.id} 
            checkTask={checkTask} deleteTask={deleteTask}/>))}
        </div>
    )
}

export default Tasks
