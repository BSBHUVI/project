import React, { useEffect, useState } from 'react'
import { useUserAuth } from '../UserContext/UserContext'
import Axios from '../components/Axios'
import { Link } from 'react-router-dom'


function Mycrops() {
 
    const [mycrop,setMycrop]=useState([])
    const {user}=useUserAuth()
    useEffect(()=>{
        Axios.get("/crops/"+user.email).then((res)=>{
            setMycrop(res.data)
        })

    },[user])
  return (
    <div className="conta" >
    <div className="cards">
   
    {mycrop.map((card)=>{
        return <div key={card._id}>
        <div  className='contain'>
          <img  className='image' src={card.pic} alt="not found" />
          <p className='p'>Posted by : {card.email}</p>
          <p className='price'>Name : {card.name} </p>
          <p className='price'>Price : {card.price} /kg</p>
          <p className='number'>Contact : <a href={`tel:${card.number}`}>{card.number}</a></p>
          
         
        </div>

        </div> 
      })}
      {mycrop.length===0 && <h1 className='hhh'> No crops 😓!! would you like to post some : <Link to="/project/Home/Upload">post here</Link> </h1>}
      </div>
     
    </div>
  )
}

export default Mycrops
