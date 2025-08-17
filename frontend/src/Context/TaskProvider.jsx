import {useState, useEffect } from 'react'
import axios from 'axios';
import {TaskContext} from './TaskContext'

const TaskProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [task, setTask] = useState([])
    const fetchData = async () => {
        try {
            const res = await axios.get("http://localhost:3000/api/task")
            setTask(res.data)
            console.log(res)
            
        } catch (err) {
            console.log("Error while fetching data", err)
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/task/${id}`)
            setTask((prev) => prev.filter((t) => t._id !== id))
        }
        catch (err) {
            console.log("Error while deleting task!", err);
        }
    }

    const addTask = async (title) => {
        try {
            const res = await axios.post("http://localhost:3000/api/task", {
                title: title,
            })
            setTask((prev) => [...prev, res.data])
        }
        catch (err) {
            console.log("Error while adding task!", err);
        }
    }
    const handleEdit = async(id, title) => {
        try{
            const res = await axios.patch(`http://localhost:3000/api/task/${id}`, {
                title: title
            })
            setTask((prev)=>prev.map((t)=>(t._id===id?res.data:t)))
        }
        catch (err) {
            console.log("Error updating task", err);
        }
    }
    return (
        <TaskContext.Provider value={{ handleEdit, addTask, handleDelete, task,loading, fetchData }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider