import { useContext, useState } from "react"
import { AuthContext } from "../../Context/AuthProvider"

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext)
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')


  const [newTask, setNewTask] = useState({})


  const submitHandler = (e) => {
    e.preventDefault();

    // 1) Build the full task object here synchronously
    const task = {
      title:       taskTitle,
      description: taskDescription,
      date:        taskDate,
      category:    category,
      newTask:     true,
      active:      false,
      completed:   false,
      failed:      false
    };

    // 2) Update the userData immutably via context setter
    setUserData(prev =>
      prev.map(emp =>
        emp.firstName === assignTo
          ? {
              ...emp,
              tasks: [...emp.tasks, task],
              taskCount: {
                ...emp.taskCount,
                newTask: emp.taskCount.newTask + 1
              }
            }
          : emp
      )
    );

    // 3) Clear the form fields
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
    }

  return (
    <div>
    <form onSubmit={(e) => { 
    
      submitHandler(e)
     } }
    className='w-full max-w-lg mx-auto mt-10 bg-emerald-500 p-4 rounded-md'> 
  <div className='flex flex-wrap -mx-2 mb-4'> {/* Reduced negative margin and bottom margin */}
    {/* Task Title */}
    <div className='w-full md:w-1/2 px-2 mb-4 md:mb-0'> {/* Reduced horizontal padding and bottom margin */}
      <label htmlFor="taskTitle" className='block text-sm font-semibold mb-1'> {/* Less bold label, less bottom margin */}
        Task Title
      </label>
      <input
      value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        type="text"
        id="taskTitle"
        placeholder='Enter Task Title'
        className=' w-full  border border-gray-300 rounded-sm py-2 px-3 leading-tight focus:outline-none focus:border-blue-300'
      />
    </div>

    {/* Date */}
    <div className='w-full md:w-1/2 px-2'> {/* Reduced horizontal padding */}
      <label htmlFor="taskDate" className='block text-sm font-semibold mb-1'>
        Date
      </label>
      <input
      value={taskDate}
        onChange={(e) => setTaskDate(e.target.value)}
        type="date"
        id="taskDate"
        placeholder='Select Date'
        className=' w-full border border-gray-300 rounded-sm py-2 px-3 leading-tight focus:outline-none focus:border-blue-300'
      />
    </div>
  </div>
  {/* ... other fields with similar minimal styling ... */}
   <div className='flex flex-wrap -mx-2 mb-4'>
    {/* Assign */}
    <div className='w-full md:w-1/2 px-2 mb-4 md:mb-0'>
      <label htmlFor="assignee" className='block text-sm font-semibold mb-1'>
        Assign
      </label>
      <input
      value={assignTo}
        onChange={(e) => setAssignTo(e.target.value)}
        type="text"
        id="assignee"
        placeholder='Assign employee task'
        className=' w-full  border border-gray-300 rounded-sm py-2 px-3 leading-tight focus:outline-none focus:border-blue-300'
      />
    </div>

    {/* Category */}
    <div className='w-full md:w-1/2 px-2'>
      <label htmlFor="category" className='block text-sm font-semibold mb-1'>
        Category
      </label>
      <input
      value={category}
        onChange={(e) => setCategory(e.target.value)}
        type="text"
        id="category"
        placeholder='Enter Category'
        className=' w-full border  rounded-sm py-2 px-3 leading-tight focus:outline-none focus:border-blue-300'
      />
    </div>
  </div>

  <div className='flex flex-wrap -mx-2 mb-6'> {/* Slightly more bottom margin before button */}
    {/* Description */}
    <div className='w-full px-2'>
      <label htmlFor="description" className='block text-sm font-semibold mb-1'>
        Description
      </label>
      <textarea
      value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        id="description"
        cols="40"
        rows="6"
        placeholder='Enter Description'
        className='w-full  border border-gray-300 rounded-sm py-2 px-3 leading-tight focus:outline-none focus:border-blue-300 resize-none'
      ></textarea>
    </div>
  </div>

  <div className='flex flex-wrap -mx-2 mt-4'> {/* Space above button */}
    <div className='w-full px-2'>
      <button
        type="submit"
        className='bg-blue-500 hover:bg-blue-700 focus:outline-none font-semibold py-2 px-4 rounded-sm w-full'
      >
        Create Task
      </button>
    </div>
  </div>
</form>
</div>
  )
}

export default CreateTask