import { useState, useEffect } from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    // 1) Grab the raw "loggedInUser" string
    const raw = localStorage.getItem("loggedInUser");
    if (!raw) return;

    try {
      // 2) Parse it and pull out data.firstName
      const { data } = JSON.parse(raw);
      if (data && data.firstName) {
        setFirstName(data.firstName);
      }
    } catch {
      // malformed JSON or missing fields — do nothing
    }
  }, []);

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header changeUser= {props.changeUser} data={props.data} firstName={firstName}/>
      <TaskListNumber data={props.data}/>
      <TaskList data = {props.data}/>
    </div>
  )
}

export default EmployeeDashboard