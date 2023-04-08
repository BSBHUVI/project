import React from 'react'
import {agriData} from './AgriculturalDataset'
import './Agri.css'
import { CurrencyRupee } from '@mui/icons-material'

function Agricultural() {

    
  return (
    <><h1 style={{textAlign:"center",marginTop:"6rem"}}>Agricultural Crop Data Of Every state</h1>
    <div className='conect'>
    
    {agriData.map((val,id)=>{
        return <div className='agri' key={id}>
            <p>State : {val.state}</p>
            <p>District : {val.district}</p>
            <p>Market : {val.market}</p>
            <p>Commodity : {val.commodity}</p>
            <p>Variety : {val.variety}</p>
            <div style={{display:"flex",alignItems:"center"}}>
           <p>Min_Price</p> : <CurrencyRupee/><p>{val.min_price}</p>
            </div>
            <div style={{display:"flex",alignItems:"center"}}>
            <p>Max_Price</p> : <CurrencyRupee/><p>{val.max_price}</p>
            </div>
            <div style={{display:"flex",alignItems:"center"}}>
           <p>Modeln_Price</p> : <CurrencyRupee/><p>{val.modal_price}</p>
            </div>
            
        </div>
    })}
      
    </div>
    </>
  )
}

export default Agricultural
