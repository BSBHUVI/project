import React, { useEffect, useState } from 'react'


import './Home.css'
import Axios from '../components/Axios'
import { useUserAuth } from "../UserContext/UserContext";






function Home() {
  const {user}=useUserAuth()
  const [cards,setCards]=useState([])
  useEffect(()=>{
    Axios.get('/user/upload').then((res)=>{
      setCards(res.data)
    }).catch((err)=>{
      console.log(err.message)
    })
    
  },[])
  const initPayment=(data)=>{
    const options={
      key:"rzp_test_p5o0NnLO0ceScY",
      amount:data.amount,
      user:user.email,
      currency:data.currency,
      description:"test transation",
      order_id:data.id,
      handler:async(response)=>{
        try{
          const {data}=Axios.post("/verify",response);
          console.log(data)


        }catch(error){
          console.log(error)

        }
      },
      theme:{
        color:"#3399cc"
      }
    };
    const rzp1=new window.Razorpay(options)
    rzp1.open()
  }
  const handlePayment=async(price)=>{
    try{
       
       const {data}=await Axios.post("/orders",{amount:price})
       console.log(data)
       initPayment(data.data);
    }catch(error){
      console.log(error);
    }

  }

    
  return (
    <div>
     
      
      
      <div className='conta'>
      <div className="cards">
      {cards.map((card)=>{
        return <div key={card._id}>
        <div  className='contain'>
          <img  className='image' src={card.pic} alt="not found" />
          <p className='p'>Posted by : {card.email}</p>
       
          <p className='price'>Price : {card.price} /kg</p>
          <p className='number'>Contact : <a href={`tel:${card.number}`}>{card.number}</a></p>
          <button onClick={()=>handlePayment(card.price)} className='button'>Buy</button>
          {user.email===card.email && <button className='button' >delete</button>}
        </div>
        </div> 
      })}
      </div>
       
    

      
    </div>
      
    </div>
  )
}

export default Home
