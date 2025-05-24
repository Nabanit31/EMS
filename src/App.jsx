
import { useContext,useState,useEffect } from 'react'
import Login from './Components/Auth/Login'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import { getLocalStorage } from './Utils/LocalStorage'
import { setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {

// localStorage.clear()


const { employees, admin } = useContext(AuthContext);
  const [userRole, setUserRole]           = useState(null);
  const [loggedInUserData, setLoggedInUserData]   = useState(null);

const [userData, setUserData] = useState(null)
// loading flag while we rehydrate from localStorage
  const [isRehydrating, setIsRehydrating] = useState(true);

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



    useEffect(() => {
    if (!employees.length && !admin) {
      // still waiting for AuthContext to populate
      return;
    }

    const raw = localStorage.getItem('loggedInUser');
    if (raw) {
      const { role, email } = JSON.parse(raw);
      setUserRole(role);

      if (role === 'admin') {
        setUserData(admin);
      } else if (role === 'employee') {
        const emp = employees.find(e => e.email === email);
        setUserData(emp || null);
      }
    }

    // done rehydrating
    setIsRehydrating(false);
  }, [employees, admin]);



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
    // admin check
    if (email === admin.email && password === admin.password) {
      setUserRole("admin");
      setLoggedInUserData(admin);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", email })
      );

    // employee check
    } else {
      const emp = employees.find(
        (e) => e.email === email && e.password === password
      );
      if (emp) {
        setUserRole("employee");
        setLoggedInUserData(emp);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", email })
        );
      } else {
        alert("Invalid email or password");
      }
    }
  };

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

const handleLogout = () => {
    setUserRole(null);
    setUserData(null);
    localStorage.removeItem('loggedInUser');
  };

  // While we’re reading localStorage, don’t render anything
  if (isRehydrating) {
    return null; // or a spinner/placeholder
  }

  // If still not logged in, show login form
  if (!userRole) {
    return <Login handleLogin={handleLogin} />;
  }


 if (!userRole) {
    return <Login handleLogin={handleLogin} />;
  }

  return userRole === "admin" ? (
    <AdminDashboard data={loggedInUserData} onLogout={handleLogout}/>
  ) : (
    <EmployeeDashboard data={loggedInUserData} onLogout={handleLogout}/>
  );
}
export default App