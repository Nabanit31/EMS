
import { useEffect } from 'react'
import Login from './Components/Auth/Login'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import { getLocalStorage } from './Utils/LocalStorage'
import { setLocalStorage } from './Utils/LocalStorage'

const App = () => {

setLocalStorage();
getLocalStorage();

  return (
    <>
     {/* <Login/> */}
    {/* <EmployeeDashboard/> */}
    <AdminDashboard/>

    </>
  )
}

export default App