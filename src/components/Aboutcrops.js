import React from 'react'
import "./aboutcrops.css"
import { useUserAuth } from "../UserContext/UserContext";

function Aboutcrops() {
    const {about}=useUserAuth()
    
    
  return (
    <div className='upmar conta'>
    <h1 className='cropname' style={{textAlign:"center"}}>About Crops</h1>
    {about && about.map((ab)=>{
        return <div className='abo' key={ab._id}>
        <h1 className='cropname'>Name : {ab.name}</h1>
        <div className='imgdiv'>
        <img className='cimg' src={ab.image} alt="not found" />
        </div>
        <p className='ap'><span className='des'>Description : </span>{ab.description}</p>

        </div>
    })}
     
    </div>
  )
}

export default Aboutcrops
