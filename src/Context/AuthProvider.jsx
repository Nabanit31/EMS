import {useState,useEffect,createContext } from 'react'
import { getLocalStorage,setLocalStorage } from '../Utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {


  const [userData, setUserData] = useState('')
  
useEffect(() => {
  setLocalStorage();                       // <-- populate localStorage first
  const { employees, admin } = getLocalStorage();
  setUserData({ employees, admin });
}, []);


  

  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider