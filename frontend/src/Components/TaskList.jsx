import React, { useContext, useState } from 'react'
import TaskItem from './TaskItem';
import { TaskContext } from '../Context/TaskContext'

const TaskList = () => {
    const { handleDelete, handleEdit,  task, addTask } = useContext(TaskContext)
    const [title, setTitle] = useState("")
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            addTask(title)
            setTitle("");
        }
    }
    return (
        <div className='mx-auto w-1/2'>
            <h2 className='text-3xl font-bold my-3'>Todo</h2>
            <div className='w-full flex items-center justify-between'>
                <input type="text" value={title} onKeyDown={handleKeyPress} onChange={(e) => setTitle(e.target.value)} className='flex-1 border px-4 py-1 rounded-sm w-full' />
                <button onClick={() => {
                    if (title.trim()) {
                        addTask(title);
                        setTitle("");
                    }
                }} className='border-1 px-4 py-1 rounded-sm ml-2 hover:bg-gray-900 cursor-pointer hover:text-amber-100 hover:border-black'>Add Task</button>
            </div>
            <div>
                <div>
                    <h2 className='text-xl font-semibold my-3'>Bucket List</h2>
                </div>
                <div>
                    <div className={`flex w-full flex-col-reverse max-h-[60vh] overflow-auto`}>
                        {task.map((t) => (
                            <TaskItem key={t._id} task={t.title} handleEdit={handleEdit} deleteTask={handleDelete} id={t._id} />
                        ))}
                    </div>
                    <button className={`float-right bg-white text-black px-3 py-1 mt-3 rounded border hover:bg-gray-800 cursor-pointer hover:text-amber-100 hover:border-black`}>Mark as Completed</button>
                </div>
            </div>
        </div>
    )
}

export default TaskList