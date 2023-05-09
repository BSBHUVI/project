import React, { useEffect, useState} from 'react'


import './Home.css'
import Axios from '../components/Axios'
import { useUserAuth } from "../UserContext/UserContext";
import { useRef } from 'react';
import MyComponent from './MapComponent';










function Home() {
  



  const {user}=useUserAuth()
  const [toggle,setToggle]=useState(false)
  const {cards}=useUserAuth()
  const [search,setSearch]=useState([])
  const [load ,setload]=useState(true)

  
 
 const sortval=useRef()

  const inputref=useRef()
  useEffect(()=>{
     
    inputref.current.focus()
    setSearch([...cards].reverse())
    setload(false)

  },[cards,toggle])
  const fillter=(e)=>{
    e.preventDefault()
   setSearch( [...cards].filter((p)=>p.name.toLowerCase().includes((inputref.current.value).toLowerCase())).sort((a,b)=>a.name.localeCompare(b.name)))
   
   
 inputref.current.value=""
    
   }
  
  
  
  


 
  const initPayment= async (data,email,cropid,pic,pricing,number,lat,long)=>{
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
            latitude:lat,
            longitude:long
            
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
  const handlePayment=async(price,email,cropid,pic,pricing,number,lat,long)=>{
    try{
       
       const {data}=await Axios.post("/orders",{amount:price})
       await initPayment(data.data,email,cropid,pic,pricing,number,lat,long);
      
    }catch(error){
      console.log(error);
    }

  }
 const del = (id)=>{
 
    Axios.delete("/deletecrop/" + id).then(()=>{
      setToggle((prev)=>!prev)})
   
  }
const sortlist=()=>{
  switch(sortval.current.value){
    case "name":
      setSearch([...cards].sort((a,b)=>a.name.localeCompare(b.name)))
      break
    case "newest":
      setSearch([...cards].reverse())
      break 
    case "oldest":
      setSearch([...cards])
      break
    case "lowcost":
      setSearch([...cards].sort((a,b)=>(Number(a.price)-Number(b.price))))
      break    
    case "highcost":
      setSearch([...cards].sort((a,b)=>(Number(a.price)-Number(b.price))).reverse())
      break
      
    default:  
    break
  }
}
console.log(search);  
  return (
    <div>
     
      
    
    
      <div className='conta'>
      <form style={{display:"inline"}} onSubmit={fillter} >
      <input className='sea' ref={inputref} type="text" placeholder='search' />
      </form>
      <label style={{marginLeft:"1rem"}} htmlFor="sort">sort by:</label>

<select onChange={sortlist} ref={sortval} name="sort" id="sort">
<option value="newest">Newest</option>
<option value="name">Name</option>

  <option value="oldest">Oldest</option>
  <option value="lowcost">Low cost</option>
  <option value="highcost">High cost</option>

</select>
<div style={{marginTop:"0.5rem",borderBottom:"3px solid white"}}></div>

      
{load && <div>No Data!!</div> }
   {!load &&   <div className="cards">
      {search.length===0 && <p className='p z' >loading !!!</p>}
      {search && search.map((card)=>{
        return <div key={card._id}>
        <div  className='contain'>
          <img  className='image' src={card.pic} alt="not found" />
          <p className='p'>Posted by : {card.email}</p>
        {card?.seller && <p className='p'>Seller Name : {card?.seller}</p>}
          <p style={{fontWeight:"900"}}>Crop Name : {(card.name).toUpperCase()}</p>
          
       
          <p className='price'>Price : {card.price} /kg</p>
          <p className='number'>Contact : <a href={`tel:${card.number}`}>{card.number}</a></p>
          <div className="price">
          <span className='price'>Adrress of seller : </span>
          <MyComponent longitude={card.longitude} latitude={card.latitude}/>
          </div>
         {user.email!==card.email && <button onClick={()=>handlePayment(card.price,card.email,card._id,card.pic,card.price,card.number,card.latitude,card.longitude)} className='button'>Buy</button>}
          {user.email===card.email && <button onClick={() => del(card._id)} className='button' >delete</button>}
        </div>
        </div> 
      })}
      
      </div>}
      
       
    

      
    </div>
      
    </div>
  )
}

export default Home
