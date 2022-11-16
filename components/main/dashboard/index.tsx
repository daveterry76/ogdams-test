import React from 'react'
import Actions from './actions'
import Form from './form'
import Network from './network-type'
import Notifications from './notifications'
import Stats from './stats'
import Transactions from './transactions'

const Dashboard = () => {
  return (
    <>
        <Notifications />
        <Actions />
        <Stats />
        <Network />
        <div className='mt-5 flex'>
          <div className='w-1/4'>
            <Form />
          </div>
          <div className='ml-6 w-3/4'>
            <Transactions />
          </div>
        </div>
    </>
  )
}

export default Dashboard