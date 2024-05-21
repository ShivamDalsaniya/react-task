import React from 'react'
import {Link} from 'react-router-dom'
export default function Sidebar() {
  return (
    <>
        <div className='sidebar bg-primary vh-100 m-0 position-relative'>
         <ul className='mt-5 position-absolute'>
          <li><Link to="" className='text-white fs-5'>Dashoboard</Link></li>
          <li><Link to="" className='text-white fs-5'>Add Task</Link></li>
          <li><Link to="" className='text-white fs-5'>Manage Task</Link></li>
         
         </ul>

        </div>
    </>
  )
}
