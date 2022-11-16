import React, { useState, useRef } from 'react';

const StaffResellers = () => {
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <h3 className='ml-2 text-[15px]'>STAFF / RESELLERS</h3>
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
                    <p className='text-sm font-normal'>Add New Staff</p>
                    <button className='text-white bg-red-500 p-0 rounded-md w-9 h-5 mt-1 text-sm'>NEW</button>
                </div>
                <p className='text-sm font-normal mb-1'>All Staff</p>
                <p className='text-sm font-normal mb-1'>Upgrade Limit</p>
                <p className='text-sm font-normal mb-1'>Reseller Links</p>
            </div> }
        </div>
    </>
  )
}

export default StaffResellers;
