import React, { useState } from 'react'

import './loan.css'

function Loancalculator() {
  const [amt,setamt]=useState(0)
  const [rate,setrate]=useState(0)
  const [term,setterm]=useState(0)
 const calculate=(e)=>{
  e.preventDefault()
  const amt1=parseInt(amt)
  const rate1=parseInt(rate)
  const term1=parseInt(term)
  const si=amt1*rate1*term1/100
  const totalamount=amt1+(si*term1)
  const emipermonth=(totalamount/term1)/12;
  console.log(si,totalamount,emipermonth)

 }
  return (
    <>
    <div className='lconta'>
      <h1 className='lcal'>Loan Calculator</h1>
      <div className="loancontainer">
        <div className='loanform'>
          <input className='linp'  value={amt} onChange={(e)=>{setamt(e.target.value)}} type="number" min="1" placeholder='Enter the amount'/>
          

          <input className='linp'  value={rate} onChange={(e)=>{setrate(e.target.value)}} type="number" placeholder='Enter the interst rate' />
         <input className='linp'  value={term} onChange={(e)=>{setterm(e.target.value)}} type="number" placeholder='enter loan term' />
          
          <button  onClick={calculate}>calculate</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Loancalculator
