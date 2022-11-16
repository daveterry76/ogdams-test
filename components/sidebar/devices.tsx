import React, { useState, useRef } from 'react';

const Devices = () => {
    const [open, setOpen] = useState<boolean>(false);
    const dropRight: any = useRef(null);
    const dropDown: any = useRef(null);

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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                    <h3 className='ml-2 text-[15px]'>DEVICES</h3>
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
                <p className='text-sm font-normal mb-1'>Manage Plans</p>
                <p className='text-sm font-normal mb-1'>Data List Plan ID (API)</p>
                <p className='text-sm font-normal'>Sell Bulk</p>
            </div> }
        </div>
    </>
  )
}

export default Devices;
