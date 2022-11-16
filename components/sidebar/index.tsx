import React from 'react';
import OgdamsBtn from './ogdams-btn';
import List from './list';
import DataPortals from './data-portals';
import Numbers from './numbers';
import Data from './data';
import Devices from './devices';
import Utilities from './utilities';
import StaffResellers from './staff-resellers';

const Sidebar = () => {
  return (
    <>
        <div className='flex flex-col py-4 mx-6 cursor-pointer'>
            <OgdamsBtn />
            <hr className='text-white mt-2 opacity-20' />
            <List />
            <DataPortals />
            <Numbers />
            <Data />
            <Devices />
            <Utilities />
            <StaffResellers />
        </div>
    </>
  )
}

export default Sidebar;