import React, { useState, useRef } from 'react';
import { FaNetworkWired } from 'react-icons/fa';
import { RiArrowDropDownLine, RiArrowDropRightLine } from 'react-icons/ri';


const DataPortals = () => {
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
                    <FaNetworkWired className='mt-1' />
                    <h3 className='ml-2 text-[15px]'>DATA PORTALS</h3>
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
                    <p className='text-sm font-normal'>Glo Gifting Portal</p>
                    <button className='text-white bg-orange-400 p-0 rounded-md w-9 h-5 mt-1 text-sm'>ZEEH</button>
                </div>
                <div className='flex justify-between mb-1'>
                    <p className='text-sm font-normal'>MTN SME Portal</p>
                    <button className='bg-white text-orange-400 p-0 rounded-md w-9 h-5 mt-1 text-sm'>HOT</button>
                </div>
                <p className='text-sm font-normal mb-1'>MTN CG Portal</p>
                <p className='text-sm font-normal'>Airtel CG Portal</p>
            </div> }
        </div>
    </>
  )
}

export default DataPortals