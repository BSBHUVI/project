import React from 'react'
import './startpage.css'
import farmer from '../Images/farmer.jpg'
import { Link } from 'react-router-dom'

function Startpage() {
  return (
    <div className='imgbody'>
    <img className='farimg' src={farmer} alt="farmer" />
    <p className='fartitle'>Connect With Your Customers Directly  </p>
    <div className='getst'>
   <Link to="/project/Home/Home"> <button className='started'>Get Started ▶️</button></Link>
   
    </div> 
  

      
    </div>
  )
}

export default Startpage
