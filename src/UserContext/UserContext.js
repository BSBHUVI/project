import React, { createContext, useContext, useEffect, useState } from 'react'
import {auth} from '../firebase'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,
onAuthStateChanged,
signOut,GoogleAuthProvider, signInWithPopup
} from 'firebase/auth'
import Axios from '../components/Axios'
const Context=createContext()


export function UserContext({children}) {
    const provider = new GoogleAuthProvider();
    const [user,setUser]=useState({})
    const [cards,setCards] =useState([])
    const [about,setAbout]=useState([])

    const [toggle,setToggle]=useState(true)
   
    useEffect(()=>{
        Axios.get('/user/upload').then((data)=>{setCards(data.data)})
    },[toggle])
    useEffect(()=>{
        Axios.get('/user/aboutcrop').then((data)=>{setAbout(data.data)})
    },[])
    
    

      
    
    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    function signup(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }
    function googlesignup(){
        return signInWithPopup(auth,provider)
    }
    function logout(){
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
            setUser(currentuser)
        })
        return ()=>{
            unsubscribe()
        }
    },[]);
    console.log(user);
  return (
    <Context.Provider value={{user,about,login,signup,logout,googlesignup,cards,setToggle}}>
      {children}
    </Context.Provider>
  )
}
export function useUserAuth(){
    return useContext(Context)
}

