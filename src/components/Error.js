import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100vh",flexDirection:"row"}}>
      <p style={{fontWeight:"900",fontSize:"large"}} >404 page not found 😓❌</p>
      <button className='but'><Link style={{textDecoration:"none",textTransform:"capitalize"}} to="/project/Home/Home"> go to Home page</Link></button>
    </div>
  )
}

export default Error
