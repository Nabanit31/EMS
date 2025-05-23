import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex m-10 justify-between gap-5 screen'>
        <div className="rounded-xl w-[45%] py-6 px-9 bg-emerald-400">
            <h2 className='text-3xl forn-semibold'>{data.taskCount.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
    </div>
     <div className="rounded-xl w-[45%] py-6 px-9 bg-sky-400">
            <h2 className='text-3xl forn-semibold'>{data.taskCount.completed}</h2>
            <h3 className='text-xl font-medium'>Completed</h3>
    </div>
     <div className="rounded-xl w-[45%] py-6 px-9 bg-yellow-500">
            <h2 className='text-3xl forn-semibold'>{data.taskCount.active}</h2>
            <h3 className='text-xl font-medium'>Active</h3>
    </div>
     <div className="rounded-xl w-[45%] py-6 px-9 bg-red-400">
            <h2 className='text-3xl forn-semibold'>{data.taskCount.failed}</h2>
            <h3 className='text-xl font-medium'>Failed</h3>
    </div>
    </div>
  )
}

export default TaskListNumber