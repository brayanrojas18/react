import { useState, useEffect } from 'react'
import {tasks as data} from './data/tasks'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
      setTasks(data)
  }, [])

  function createTask({ title, description }) {
    setTasks([...tasks, {
      title: title,
      id: tasks.length,
      description: description
    }])
  }

  function deleteTask(id) {
    setTasks([...tasks.filter(f => f.id !== id)])
  }

  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </>
  )
}

export default App