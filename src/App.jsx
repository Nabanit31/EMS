
import { useEffect,useState } from 'react'
import Login from './Components/Auth/Login'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import { getLocalStorage } from './Utils/LocalStorage'
import { setLocalStorage } from './Utils/LocalStorage'

const App = () => {


const [user, setUser] = useState(null)

const handleLogin = (email, password) => {
  if (email === 'admin@gmail.com' && password === '123') {
    setUser('admin');
  } else if (email === 'user@gmail.com' && password === '123') {
    setUser('user');
  } else {
    alert('Invalid email or password');
  }
};

  return (
    <>
     {!user ? <Login handleLogin = {handleLogin}/>: ''}
     {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}

    </>
  )
}

export default App