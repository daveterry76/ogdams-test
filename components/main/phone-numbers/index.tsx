/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import telecom from '../phone-numbers/telecom-info.json'

const PhoneNumberSection = () => {
    console.log(telecom);
  return (
    <>
        <div className='py-8 px-4'>
            <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
                <Link href='/dashboard' className='text-blue-800 font-bold text-sm ml-1'>GO HOME</Link>
            </div>
            <div className='border-2 rounded-md mt-8'>
                <div className='flex justify-between p-3'>
                    <h2 className='text-xl font-extrabold text-black'>Phone numbers</h2>
                    <button className='bg-blue-700 text-white flex px-3 py-2 rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                        <p className='text-[12px] font-semibold mt-[2px]'>CONNECT NEW NUMBER</p>
                    </button>
                </div>
                <div className='bg-white p-14'>
                    <div>
                       {telecom.map((t, id) => (
                        <div key={id} className='border-1 mb-4'>
                            <div className='flex justify-between h-fit bg-gray-100 rounded-t-md p-4'>
                                <div className='flex'>
                                    <img className='h-6 w-6' src={t.image} alt="telecom" />
                                    <p className='ml-2 text-sm'>{t.telecom}</p>
                                </div>
                                <div className='flex'>
                                    <div className='mr-3 flex border-2 rounded-md cursor-pointer px-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                                        </svg>
                                        <p className='text-[10px] mt-1 ml-1'>PLANS</p>
                                    </div>
                                    <div className='flex border-2 rounded-md cursor-pointer px-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <p className='text-[10px] mt-1 ml-1'>SETUP</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-gray-50 rounded-b-md h-fit p-4 flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='mt-1 h-3 w-3'>
                                    <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z"/>
                                </svg>
                                <p className='text-sm ml-2'>No phone number added for {t.telecom}</p>
                            </div>
                        </div>
                       ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PhoneNumberSection