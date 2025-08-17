import React, { useState, useEffect } from 'react'
import axios from "axios"
import TaskItem from './TaskItem';

const TaskList = () => {
    const [title, setTitle] = useState("")
    const [task, setTask] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/task")
            .then((response) => { setTask((prevTask) => [...prevTask, ...response.data]) })
            .catch(err => console.log("Error occured : ", err))
    }, [])
    useEffect(() => {
        console.log("Updated tasks: ", task);
    }, [task]);


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:3000/task", {
                title: title,
            })
            console.log("Task added Successfully")
            setTask((prev) => [...prev, res.data]);
            setTitle("")
        }
        catch (err) {
            console.log("Error while adding task!", err);
        }
    }
    return (
        <div className='mx-auto w-1/2'>
            <h2 className='text-3xl font-bold my-3'>Todo</h2>
            <div className='w-full flex items-center justify-between'>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='flex-1 border px-4 py-1 rounded-sm w-full' />
                <button onClick={handleSubmit} className='border-1 px-4 py-1 rounded-sm ml-2 hover:bg-blue-500 hover:text-amber-100 hover:border-black'>Add Task</button>
            </div>
            <div>
                <div>
                    <h2 className='text-xl font-semibold my-3'>Task todo</h2>
                </div>
                <div>
                    <div>
                        {task.map((t) => (
                            <TaskItem key={t._id} task={t.title} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskList