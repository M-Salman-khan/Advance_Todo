import React from 'react'

const Navbar = () => {
  return (
    <div className=' bg-gray-900 text-white'>
        <div className='mx-auto w-[80%]'>
            <ul className='flex items-center'>
                <li className='px-2 py-5 cursor-pointer hover:text-blue-500'><a href="#"></a>Home</li>
                <li className='px-2 py-5 cursor-pointer hover:text-blue-500'><a href="#"></a>About</li>
                <li className='px-2 py-5 cursor-pointer hover:text-blue-500'><a href="#"></a>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar