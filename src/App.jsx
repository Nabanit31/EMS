
import { useContext,useState,useEffect } from 'react'
import Login from './Components/Auth/Login'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import { AuthContext } from './Context/AuthProvider'

const App = () => {

// localStorage.clear()


const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,SetUserData] = useContext(AuthContext)

// const [loggedInUserData, setLoggedInUserData] = useState(null)
// const Authdata = useContext(AuthContext)

// useEffect(() => {
//   if(Authdata){
//     const loggedInUser = localStorage.getItem('loggedInUser')
//     if(loggedInUser){
//       setUser(loggedInUser.role)
//     }
//   }
// }, [Authdata]);

  // useEffect(() => {
  //   const raw = localStorage.getItem("loggedInUser");
  //   if (!raw) return;

  //   const { role, email } = JSON.parse(raw);
  //   setUserRole(role);

  //   if (role === "admin") {
  //     setLoggedInUserData(admin);
  //   } else if (role === "employee") {
  //     const emp = employees.find((e) => e.email === email);
  //     setLoggedInUserData(emp);
  //   }
  // }, [employees, admin]);



     useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])



// const handleLogin = (email, password) => {
//   if (email === 'admin@gmail.com' && password === '123') {
//     setUser('admin');
    
//     localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin'}));
//   } else if (Authdata ) {
//     const employee = Authdata.employees.find((e)=>email == e.email && e.password == password)
//     if(employee){
//         setUser('employee');
//         localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }));

//     }
   
//   } else {
//     alert('Invalid email or password');
//   }
// };

  const handleLogin = (email, password) => {
    if (email == 'admin@gmail.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
      }
    }
    else {
      alert("Invalid Credentials")
    }
  }

//   return (
//     <>
//      { !user
//       ? <Login handleLogin={handleLogin} />
//       : user === 'admin'
//         ? <AdminDashboard />
//         : (user == 'employee' ? <EmployeeDashboard data = {loggedInUserData}/>:null)}

//     </>
//   )
// }

// const handleLogout = () => {
//     setUserRole(null);
//     setUserData(null);
//     localStorage.removeItem('loggedInUser');
//   };

//   // While we’re reading localStorage, don’t render anything
//   if (isRehydrating) {
//     return null; // or a spinner/placeholder
//   }

//   // If still not logged in, show login form
//   if (!userRole) {
//     return <Login handleLogin={handleLogin} />;
//   }


//  if (!userRole) {
//     return <Login handleLogin={handleLogin} />;
//   }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    </>
  )
}

export default App