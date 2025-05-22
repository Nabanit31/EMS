import React from 'react'
import Header from '../others/Header'
import CreateTask from './CreateTask'
import AllTask from './AllTask'

const AdminDashboard = ({ data }) => {
  return (
    <div className='h-screen w-full p-10'>
      <Header data = {data}/>
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard