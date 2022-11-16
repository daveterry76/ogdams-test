import React, { useState, useRef } from 'react';

const Utilities = () => {
    const [open, setOpen] = useState<boolean>(false);
    const dropRight = useRef<null>(null);
    const dropDown = useRef<null>(null);

    const toggleOpen = () => {
        setOpen(!open);
        dropRight.current.style.display = 'none';
        // dropDown.current.style.display = 'block';
    }

    const toggleClose = () => {
        setOpen(!open);
        dropRight.current.style.display = 'block';
    }
  return (
    <>
        <div className='mt-4 text-white'>
            <div className='flex justify-between'>
                <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
                    <h3 className='ml-2 text-[15px]'>UTILITIES</h3>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" ref={dropRight} onClick={toggleOpen} className="w-4 h-4 mt-1 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                { open && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" ref={dropDown} onClick={toggleClose} className="w-4 h-4 mt-1 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg> }
                {/* <RiArrowDropRightLine ref={dropRight} onClick={toggleOpen} className='cursor-pointer' /> */}
            </div>
            { open && <div className='mt-3'>
                <div className='flex justify-between mb-1'>
                    <p className='text-sm font-normal'>Quick Share</p>
                    <button className='text-white bg-green-400 p-0 rounded-md w-9 h-5 mt-1 text-sm'>LIVE</button>
                </div>
                <p className='text-sm font-normal'>Usage Charges</p>
            </div> }
        </div>
    </>
  )
}

export default Utilities;
