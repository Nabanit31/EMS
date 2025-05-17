import React, { children } from 'react'

const AuthContext = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default AuthContext