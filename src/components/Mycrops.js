import React from 'react'
import { useUserAuth } from '../UserContext/UserContext'

function Mycrops() {
    const {mycrop}=useUserAuth()
  return (
    <div className="mar" >
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
      {mycrop.length===0 && <h1 className='hhh'> loading!! 😓</h1>}
      </div>
     
    </div>
  )
}

export default Mycrops
