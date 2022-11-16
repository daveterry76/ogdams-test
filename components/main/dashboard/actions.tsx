import React from 'react'
import { FaTelegramPlane, FaWallet } from 'react-icons/fa';

const Actions = () => {
  return (
    <>
      <div className='flex justify-end mt-3'>
        <div className='flex'>
          <button className='bg-gray-200 rounded-md flex text-blue-700 p-2'>
            <FaTelegramPlane className='mt-1 text-sm' />
            <p className='text-[10px] ml-2 font-bold'>TRANSFER</p>
          </button>
          <button className='bg-gray-50 mx-3 rounded-md flex text-blue-700 p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1 text-sm">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>
            <p className='text-[10px] ml-2 font-bold'>PURCHASE</p>
          </button>
          <button className='bg-blue-500 rounded-md flex text-white p-2'>
            <FaWallet className='mt-1 text-sm' />
            <p className='text-[10px] ml-2 font-bold'>ADD FUNDS</p>
          </button>
        </div>
      </div>
    </>
  )
}

export default Actions;