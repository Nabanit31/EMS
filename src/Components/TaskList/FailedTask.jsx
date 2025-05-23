import React from 'react'

const FailedTask = () => {
  return (
     <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl">
             <div className='flex justify-between items-center'>
        <h3 className='bg-emerald-600 text-sm px-3 py-1 rounded'>
            High
        </h3>
        <h4 className='text-sm'>31 Aug 2025</h4>
       </div>
       <h2 className='mt-5 text-2xl font-semibold'>Finish Learning React</h2>
       <p className='text-sm mt-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perferendis 
        atque commodi, mollitia id delectus?
       </p>
       <div className="mt-2 bg-red-400 rounded-lg mt-10">
        <button className="w-full">Failed</button>
       </div>
        </div>
  )
}

export default FailedTask