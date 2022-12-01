import React, { useEffect, useState } from 'react'
import Axios from '../components/Axios'
import './users.css'

function Userinfo() {
    const [user,setUsers]=useState([])
    useEffect(()=>{
        Axios.get('/user/sync').then((res)=>{
            setUsers(res.data)

        })
        

    },[])
    
  return (
    <>
    <div className='totalconta'>
    <div className="c1">
    <h1 className='far'>Farmers List</h1>
      {user.map((users)=>{
        return <div className={`${users.farmers?"farmer":"customer"}`} key={users._id}>
        <p>Email : {users.email}</p>
        <p>Name : {users.name}</p>
        <p>Type : {users.farmers?"farmer":"customer"}</p>
        

        </div>
      })}
      </div>
      <hr />
      <div className="c2">
      <h1 className='far'>Customers List</h1>
      {user.map((users)=>{
        return <div className={`${users.farmers?"farm":"cus"}`} key={users._id}>
        <p>Email : {users.email}</p>
        <p>Name : {users.name}</p>
        <p>Type : {users.farmers?"farmer":"customer"}</p>
        

        </div>
      })}
      

      </div>
      <hr />
    </div>
    </>
  )
}

export default Userinfo
