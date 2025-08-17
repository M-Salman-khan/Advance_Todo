import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
const TaskItem = (props) => {
    return (
        <div className='border py-2 flex px-3 my-2'>
            <div className='flex-1'>{props.task}</div>
            <FaRegEdit size={20} className='mx-2' />
            <MdDeleteOutline size={24} />
        </div>
    )
}

export default TaskItem