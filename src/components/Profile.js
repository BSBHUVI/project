import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./profile.css"
import avatar from '../Images/th.jpeg'
import Axios from './Axios'
import { useUserAuth } from "../UserContext/UserContext";
import { Link } from 'react-router-dom'

function Profile() {
    const {user}=useUserAuth()
    const [loading,setloading]=useState(true);
    const [profile,setprofile]=useState([])
   
    
    useEffect(()=>{
        Axios.get("/user/"+user.email).then((res)=>{
            setprofile(res.data)
        }).then(setloading(false))

    },[user])
  return (
    <>
    <Link to='/Home/Home'><button className='butt'>
  <span className="shadow"></span>
  <span className="edge"></span>
  <span className="front text"> Back to Home
  </span>
</button></Link>

{loading ? (
    <div className='profile'>
    <div className="con">
    <h1>loading...........</h1>
    </div>
     
    </div>
        ) : (
            <div className='profile'>
    <div className="con">
    <IconButton>
    <Avatar src={avatar} />
    </IconButton>
    {profile.map((res)=>{
        return <div key={res._id}>
        <h4>Name : {res.name}</h4>
            <h4
             className='e'>Email : {res.email}</h4>
            <h4>Type : {res.farmers ? "Farmer":"Customer"}</h4>

        </div>
    })}
   
    </div>
     
    </div>
         
        )}
  
    </>
  )
}

export default Profile
