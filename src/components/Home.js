import React, { useEffect, useState } from 'react'


import './Home.css'
import Axios from '../components/Axios'
import { useUserAuth } from "../UserContext/UserContext";







function Home() {
  const {user}=useUserAuth()
  const [cards,setCards]=useState([])
  useEffect(() => {
    const scriptTag = document.createElement('script');

    scriptTag.src = "https://checkout.razorpay.com/v1/checkout.js";
    scriptTag.async = true;

    document.body.appendChild(scriptTag);
    return () => {
        document.body.removeChild(scriptTag);
    }
}, []);

  useEffect(()=>{
    Axios.get('/user/upload').then((res)=>{
      setCards(res.data.reverse())
    }).catch((err)=>{
      console.log(err.message)
    })
    
  },[cards])
  const initPayment= async (data,email,cropid,pic,pricing,number)=>{
    const options={
      key:"rzp_test_p5o0NnLO0ceScY",
      amount:data.amount,
      user:user.email,
      currency:data.currency,
      description:"test transation",
      order_id:data.id,
      handler:async(response)=>{
        try{
          const data=await Axios.post("/verify",response);
           alert(data.data.message)  
           await Axios.post("/verifiedorders",{
            email:user.email,
            farmeremail:email,
            cropid:cropid,
            pic:pic,
            pricing:pricing,
            number:number,
            
           }) 
          
               
          


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
  const handlePayment=async(price,email,cropid,pic,pricing,number)=>{
    try{
       
       const {data}=await Axios.post("/orders",{amount:price})
       console.log(data)
       await initPayment(data.data,email,cropid,pic,pricing,number);
      
    }catch(error){
      console.log(error);
    }

  }
 const del = async (id)=>{
  let sure = window.confirm("Are you sure?");
  if (sure){
   await Axios.delete("/deletecrop/" + id)
   window.location.reload()
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
          <button onClick={()=>handlePayment(card.price,card.email,card._id,card.pic,card.price,card.number)} className='button'>Buy</button>
          {user.email===card.email && <button onClick={() => del(card._id)} className='button' >delete</button>}
        </div>
        </div> 
      })}
      </div>
       
    

      
    </div>
      
    </div>
  )
}

export default Home
