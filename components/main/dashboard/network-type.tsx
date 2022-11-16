/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { BsFillSimFill }  from 'react-icons/bs'


const Network = () => {
  return (
    <>
      <div className='mt-4 flex'>
        <div className='flex w-1/4 px-4 py-3 justify-between bg-gray-300 rounded-tl-lg rounded-bl-lg'>
          <div className='flex'>
            <img className='h-10 w-8' src="https://i.ibb.co/CmBN8CX/mtn.png" alt="mtn icon" />
            <div className='ml-4'>
              <p className='text-sm text-blue-500 font-semibold'>MTN</p>
              <div className='flex'>
                <BsFillSimFill />
                <p className='text-[12px] ml-1'>No connected sim</p>
              </div>
              <p className='text-[12px] text-blue-500 hover:underline hover:text cursor-pointer'>Manage</p>
            </div>
          </div>
          <div className='bg-gray-400 rounded-full h-fit p-1 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
        <div className='flex w-1/4 px-4 py-3 justify-between bg-gray-300 border-l'>
          <div className='flex'>
            <img className='h-10 w-8' src="https://i.ibb.co/HxcNBYV/airtel.png" alt="mtn icon" />
            <div className='ml-4'>
              <p className='text-sm text-blue-500 font-semibold'>Airtel</p>
              <div className='flex'>
                <BsFillSimFill />
                <p className='text-[12px] ml-1'>No connected sim</p>
              </div>
              <p className='text-[12px] text-blue-500 hover:underline hover:text cursor-pointer'>Manage</p>
            </div>
          </div>
          <div className='bg-gray-400 rounded-full h-fit p-1 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
        <div className='flex w-1/4 px-4 py-3 justify-between bg-gray-300 border-l'>
          <div className='flex'>
            <img className='h-10 w-8' src="https://i.ibb.co/4gFzR5g/9mobile.png" alt="mtn icon" />
            <div className='ml-4'>
              <p className='text-sm text-blue-500 font-semibold'>9Mobile</p>
              <div className='flex'>
                <BsFillSimFill />
                <p className='text-[12px] ml-1'>No connected sim</p>
              </div>
              <p className='text-[12px] text-blue-500 hover:underline hover:text cursor-pointer'>Manage</p>
            </div>
          </div>
          <div className='bg-gray-400 rounded-full h-fit p-1 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
        <div className='flex w-1/4 px-4 py-3 justify-between bg-gray-300 border-l rounded-tr-lg rounded-br-lg'>
          <div className='flex'>
            <img className='h-10 w-8' src="https://i.ibb.co/N7Hkqfq/glo.jpg" alt="mtn icon" />
            <div className='ml-4'>
              <p className='text-sm text-blue-500 font-semibold'>Glo</p>
              <div className='flex'>
                <BsFillSimFill />
                <p className='text-[12px] ml-1'>1 sim</p>
              </div>
              <p className='text-[12px] text-blue-500 hover:underline hover:text cursor-pointer'>Manage</p>
            </div>
          </div>
          <div className='bg-gray-400 rounded-full h-fit p-1 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default Network;