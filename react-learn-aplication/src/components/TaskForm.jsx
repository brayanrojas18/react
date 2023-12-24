import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskForm({createTask}) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({title, description})
        setTitle('')
        setDescription('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Escribe tu tarea" 
                onChange={(e) => {setTitle(e.target.value)}}
                value={title}
            />
            <textarea placeholder="Escribe tu descripcion" 
                onChange={(e) => {setDescription(e.target.value)}}
                value={description}
            />
            <button>Guardar</button>
        </form>
    )
}

export default TaskForm