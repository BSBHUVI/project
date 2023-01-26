import React from 'react'
import { useState } from 'react'
import './loan.css'

function Loancalculator() {
  const [a,sa]=useState("")
  const [i,si]=useState("")
  const [m,sm]=useState("")
  const [value,setvalue]=useState(0)
  const calculate=()=>{
    const interest = (a * (i * 0.01))/m;
    const total = ((a/m) + interest);
   setvalue(total)
  }
  return (
    <div>
      <div className="conta">
      <div className="calculator">
        <h1>Loan Calculator</h1>
  
        
        <p>Amount (₹)     : <br />
            <input id="amount" value={a} onChange={(e)=>sa(e.target.value)} type="number" 
          />
        </p>
  
        <p>Interest Rate  :
            <input id="rate" value={i} onChange={(e)=>si(e.target.value)} type="number" 
            />
        </p>
  
        <p>Months to Pay :
            <input id="months" value={m} onChange={(e)=>sm(e.target.value)} type="number" 
            />
        </p>

        <button className='but' onClick={calculate}>Calculate</button>
  
        <h2 id="total"><span>EMI INFO :</span> {value}</h2>
    </div>
      </div>
    </div>
  )
}

export default Loancalculator
