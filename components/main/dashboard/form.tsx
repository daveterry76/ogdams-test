import React, { useState } from 'react';
import { ChangeEvent } from 'react';
import { BsServer } from 'react-icons/bs';
import Select from 'react-select';


const Form = () => {
    const [phoneInput, setPhoneInput] = useState<string>('');
    const [selectedOption, setSelectedOption] = useState<null>(null);
    const networkOptions = [
        { value: 'mtn', label: 'MTN' },
        { value: 'airtel', label: 'Airtel' },
        { value: '9mobile', label: '9Mobile' },
        { value: 'glo', label: 'Glo' },
     ];

     const handleSubmit = (event: ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault();
     }

  return (
    <>
        <div>
            <div className='flex justify-between'>
                <h3 className='text-lg font-bold'>Sell Data</h3>
                <div className='cursor-pointer flex text-blue-600 text-[10px] mt-1 bg-gray-300 p-1 rounded-sm'>
                    <BsServer className='mt-1' />
                    <p className='ml-1 font-bold'>SEND BULK DATA</p>
                </div>
            </div>
            <hr className='w-1/4 mt-2 border' />
            <form onSubmit={handleSubmit} className='mt-4'>
                <label className='mb-2 text-[15px]'>
                    Phone Number:
                </label>
                <input className='bg-gray-300 p-2 w-full mt-1 mb-2 rounded-sm placeholder:text-[15px]' value={phoneInput} onChange={(e) => setPhoneInput(e.target.value)} placeholder='Phone number' />
                <label className='my-2 text-[15px]'>
                    Network:
                </label>
                <select className='w-full p-2 h-fit mt-1 mb-2 bg-gray-300' placeholder='- Choose Network -'>
                    <option value="" disabled selected>- Choose Network -</option>
                    <option>MTN</option>
                    <option>Airtel</option>
                    <option>Glo</option>
                </select>
                {/* <Select className='bg-gray-300' options={networkOptions} defaultValue={selectedOption} onChange={setSelectedOption} placeholder='- Choose a network -' /> */}
                <label className='my-2 text-[15px]'>
                    Data Plans:
                </label>
                <select className='w-full p-2 h-fit mt-1 bg-gray-300' placeholder='- Choose Network -'>
                    <option className='bg-gray-300 opacity-50' value="" disabled selected>- Select Data Plan -</option>
                    <option>1 day</option>
                    <option>1 week</option>
                    <option>1 month</option>
                </select>
                <button type='submit' className='p-2 bg-blue-700 hover:bg-blue-500 text-white font-bold mt-4 w-full rounded-md text-sm'>SEND DATA</button>
            </form>
        </div>
    </>
  )
}

export default Form