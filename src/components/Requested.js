import Axios from './Axios'
import React, { useEffect, useState } from 'react'
import { useUserAuth } from '../UserContext/UserContext'
import './orders.css'
function Requested() {
    const {user}=useUserAuth()
    const [request,setrequest]=useState([])
   
    useEffect(()=>{
        Axios.get("/getrequests/"+user.email).then((res)=>{
            setrequest(res.data)
        })
    
    },[user])
    
  return (
    <div className="conta" >
    <div className="cards">
   
    {request.map((card)=>{
        return <div key={card._id}>
        <div  className='contain'>
          <img  className='image' src={card.pic} alt="not found" />
          <p className='p'>ordered by : {card.email}</p>
       
          <p className='price'>Price : {card.pricing} /kg</p>
         
          
         
        </div>
      
        </div> 
      })}
      {request.length===0 && <h1 className='hhh'> Loading!!! 😓</h1>}
     
    </div>
    </div>
  )
}

export default Requested

