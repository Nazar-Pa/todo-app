import AddTask from "./components/AddTask";
import Filter from "./components/Filter";
import Tasks from "./components/Tasks";
import {useState} from 'react'

function App() {
  let [tasks, setTasks] = useState([])
  const [value, setValue] = useState('all')

  const onAdd = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {
      id,
      task,
      checked: false,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  const checkTask = (id) => {
    setTasks(tasks.map((task) => task.id === id ? 
      {...task, checked: !task.checked} : task
      ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }


  return (

    <div className="app">
      <h1>Todo List</h1>
      <div className="aside">
      <AddTask onAdd={onAdd}/>
      <Filter value={value} handleChange={setValue}/>
      </div>
      <Tasks tasks={tasks} value={value}
      checkTask={checkTask} deleteTask={deleteTask}/>
      
      
    </div>
  );
}

export default App;
