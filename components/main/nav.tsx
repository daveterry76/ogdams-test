import React from 'react';
import { GiPlug } from 'react-icons/gi';
import { FaUserCircle } from 'react-icons/fa';

const Nav = () => {
  return (
    <>
        <div className='flex justify-between bg-white p-4'>
            <div className='flex justify-between ml-3'>
                <GiPlug className='mt-1 text-2xl' />
                <div className='flex bg-gray-300 rounded-3xl ml-8 px-4 py-2'>
                    <FaUserCircle className='mt-1 mr-2' />
                    <h4 className='text-slate-900 text-sm font-semibold'>OGDAMS TECHNOLOGIES</h4>
                </div>
            </div>
            <div className='flex cursor-pointer font-semibold'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
                </svg>
                <p className='text-sm ml-1 text-blue-700'>Logout</p>
            </div>
        </div>
    </>
  )
}

export default Nav;