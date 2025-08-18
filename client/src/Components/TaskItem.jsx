import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
const TaskItem = (props) => {
    return (
        <div className={`border py-2 flex px-3 my-2`}>
            <div className='flex-1 flex'>
                <input type="checkbox" name="" id={props.id} className='w-5 h-full text-blue-600 bg-gray-100 border-gray-300 rounded'/>
                <label htmlFor={props.id} className='w-full pl-4'>{props.task}</label>
            </div>
            <FaRegEdit  size={20} className='mx-2' />
            <MdDeleteOutline onClick={() => props.deleteTask(props.id)} size={24} />
        </div>
    )
}

export default TaskItem