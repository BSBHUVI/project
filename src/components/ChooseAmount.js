import React, { useState } from 'react'
import './Home.css'

function ChooseAmount(props) {
    const [kg,setKg]=useState(1)
    const increment=()=>{

        setKg(p=>p+1)
        props.quantity(kg+1)
      
      }
      const decrement=()=>{
        if(kg>1){
          setKg(p=>p-1)
          props.quantity(kg-1)
        }
      }
  return (
    <div style={{display:"flex",alignItems:"center"}}>
       <button className='quan' onClick={decrement}>-</button>
          <p>{kg}</p>
<button className='quan' onClick={increment}>+</button>
    </div>
  )
}

export default ChooseAmount
