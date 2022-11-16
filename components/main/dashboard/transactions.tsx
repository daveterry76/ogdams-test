import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import transactions from './transactions.json';

const Transactions: React.FC = () => {
  return (
    <>
        <div>
            <div className='flex justify-between mb-2'>
                <h2 className='text-xl font-semibold'>Recent Transactions</h2>
                <div className='flex text-[10px] font-semibold text-blue-500 cursor-pointer'>
                    <AiFillEye className='mt-1 mr-1' />
                    <p>SEE ALL</p>
                </div>
            </div>
            <div className='rounded-md bg-white w-full h-fit p-6'>
                {transactions.map((transaction, id) => {
                    return (
                    <div key={id} className='bg-gray-200 mb-4 flex justify-between p-3 rounded-md'>
                        <div className='flex'>
                            <p className='mr-2 font-bold text-blue-600 text-sm'>{transaction.time}</p>
                            <p className='text-sm'>{transaction.description}</p>
                        </div>
                        <div className='flex text-black'>
                            <div className={transaction.type === 'SUCCESS' ? 'bg-green-200' : "bg-red-100"}>
                                <p className='text-sm font-bold'>{transaction.type}</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                            </svg>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default Transactions