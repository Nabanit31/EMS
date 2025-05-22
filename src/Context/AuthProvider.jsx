import {useState,useEffect,createContext } from 'react'
import { getLocalStorage,setLocalStorage } from '../Utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {


  const [userData, setUserData] = useState({ employees: [], admin: null })
  
useEffect(() => {
  setLocalStorage();                       // <-- populate localStorage first
  const localStorageData = getLocalStorage();
  setUserData(localStorageData);
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