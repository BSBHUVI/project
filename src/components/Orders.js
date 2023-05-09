import React, { useEffect } from 'react'
import { useState } from 'react';
import Axios from './Axios'
import './orders.css'
import { useUserAuth } from "../UserContext/UserContext";
import { Link } from 'react-router-dom';
import MyComponent from './MapComponent';

function Orders() {
    const {user}=useUserAuth()
    const [orders,setorders]=useState([])
    
    useEffect(()=>{
        Axios.get("/getorders/"+user.email).then((res)=>{
            setorders(res.data)
        })
    
    },[user])
  return (
    <div className="conta" >
    <div className="cards">
   
    {orders.map((card)=>{
        return <div key={card._id}>
        <div  className='contain'>
          <img  className='image' src={card.pic} alt="not found" />
          <p className='p'>Posted by : {card.farmeremail}</p>
          {card?.seller && <p className='p'>Seller Name : {card?.seller}</p>}
       
          <p className='price'>Price : {card.pricing} /kg</p>
          <p className='number'>Contact : <a href={`tel:${card.number}`}>{card.number}</a></p>
          <div>
          <p>Address of seller : </p>
        
          <div className=" address price">
          <MyComponent longitude={card.longitude} latitude={card.latitude}/>
          </div>
          </div>
         
          
         
        </div>

        </div> 
      })}
      {orders.length===0 && <h1 className='hhh'> No orders yet !! 😓 make an  <Link to="/project/Home/Home">order here</Link></h1>}
      </div>
     
    </div>
  )
}

export default Orders
