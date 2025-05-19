
import { useContext,useState } from 'react'
import Login from './Components/Auth/Login'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import { getLocalStorage } from './Utils/LocalStorage'
import { setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {


const [user, setUser] = useState(null)

const Authdata = useContext(AuthContext)



const handleLogin = (email, password) => {
  if (email === 'admin@gmail.com' && password === '123') {
    setUser('admin');
  } else if (Authdata && Authdata.employees.find((e)=>email == e.email && e.password == password)) {
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