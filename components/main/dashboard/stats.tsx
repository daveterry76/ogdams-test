/* eslint-disable @next/next/no-img-element */
import React from 'react';
import stats from './stats.json';

const Stats = () => {
    console.log(stats);
  return (
    <>
        <div className='flex justify-center mt-5'>
            {stats.map((stat) => {
                return (
                    <div key={stat.id} className='rounded-md border-1 flex justify-start text-left bg-white mx-6 pl-3 pr-5 py-4 w-[30rem] h-fit'>
                        <div className='bg-gray-200 rounded-full h-10 w-10 p-2 mr-3'>
                            <img className='w-6 h-6 text-purple-600' src={stat.icon} alt="icon" />
                        </div>
                        <div>
                            <h4 className='text-[12px] font-bold text-purple-600'>{stat.type}</h4>
                            <p className='text-lg font-bold'>{stat.amount}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Stats