import Link from 'next/link';
import React, { useState, useRef } from 'react';

const Numbers = () => {
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <h3 className='ml-2 text-[15px]'>NUMBERS</h3>
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
                <Link href='/'><p className='text-sm font-normal mb-1'>Add Number</p></Link>
                <p className='text-sm font-normal'>Manage Numbers</p>
            </div> }
        </div>
    </>
  )
}

export default Numbers;