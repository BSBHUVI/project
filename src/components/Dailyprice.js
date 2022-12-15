import React from 'react'
import './prices.css'

function Dailyprice() {
  return (
    <div className='dp'>
   <iframe className='if' title='prices' src='https://vegetablemarketprice.com/market/karnataka/today'></iframe>
    </div>
  )
}

export default Dailyprice

