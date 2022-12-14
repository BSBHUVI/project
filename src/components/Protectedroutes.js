import React from 'react'
import { Navigate } from 'react-router-dom'
import {useUserAuth} from "../UserContext/UserContext"

function Protectedroutes({children}) {
    const {user}=useUserAuth()
    if (!user){
        return <Navigate to='/project'/>;
    }
  return  children
}

export default Protectedroutes
