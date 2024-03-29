import React, { useEffect } from 'react'

import './upload.css'
import { useState } from 'react'
import Axios from '../components/Axios'
import { useUserAuth } from "../UserContext/UserContext";
import { useNavigate } from 'react-router-dom'
import Navbar from "./Navbar"
function Uploadcrop() {
  const [location, setLocation] = useState({});
  const [allow,setAllow]=useState(true)

  const {setToggle}=useUserAuth()
 

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        setAllow(false)
        console.error(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  },[])
 





    const {user}=useUserAuth()
    
   
    const [pic,setPic]=useState();
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [number,setNumber]=useState("");
    const navigate=useNavigate()

    const [picLoading, setPicLoading] = useState(false);
   
 
  
    const postdetails = (pics) => {
      setPicLoading(true);
      if (pics === undefined) {
     
        return;
      }
    
      if (pics.type === "image/jpeg" || pics.type === "image/png") {
        const data = new FormData();
        data.append("file", pics);
        data.append("upload_preset", "chat-app");
        data.append("cloud_name", "piyushproj");
        fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
          method: "post",
          body: data,
        })
          .then((res) => res.json())
          .then((data) => {
            setPic(data.url.toString());
           
            setPicLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setPicLoading(false);
          });
      } else {
       alert("please select image");
        setPicLoading(false);
        return;
      }
    };
    const upload= async(e)=>{
       e.preventDefault()
     
     
        if(name!=="" && number!=="" && price!=="" && pic==="" && allow){
            alert("please fill all the values")
        }
        else{
          const response = await fetch(`https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001a1210a4097ca40b0610cfdb82791fa73&format=json&filters%5Bcommodity%5D=${name[0].toUpperCase()+name.slice(1).toLowerCase()}`);
          const data = await response.json();
         const res= await data?.records.map((val)=>parseInt(val.max_price))
         if(res.length===0){
          alert("crop name is invalid")
         }
        const res1=await res.reduce((x,y)=>(x+y))
         var Max_price=  Math.round((res1/res?.length)/50)
    
         if(price<Max_price){
          Axios.post('/user/upload',{

                
            email:user.email,
            seller:user.displayName,
            name:name,
            price:price,
            number:number,
            pic:pic,
            latitude:location.lat,
            longitude:location.lng
            

        }).then(()=>{   setToggle((prev)=>!prev)}).then(()=>{
          navigate('/project/Home/home')
        })
         }
       
else{
  alert(`Error : price is greater than Max selling price of ${name}( ₹ ${Max_price})`)
}
         
           
            
        }
    }
  
  return (
    <div>
  <Navbar/>
 
    <div className='post-container'>
    <h1 className='post-heading'>POST THE NEW CROPS</h1>
      <form className='form-container' >
      <input value={name} onChange={(e)=>setName(e.target.value)} className='input-text' type="text" placeholder='Enter the Crop Name ' />
      <input  value={price} onChange={(e)=>setPrice(e.target.value)}  className='input-text' type="number" min={0} placeholder='Enter the Price' />
      <input  value={number} onChange={(e)=>setNumber(e.target.value)}  className='input-text' type="text" placeholder='Enter the contact number'/>
      <label htmlFor="image">Select the crop image</label>
      <input  id='image' type="file" p={1.5} accept="image/*" onChange={(e)=>{postdetails(e.target.files[0])}} />
   {picLoading?    <button disabled  className='but-form2'>POST</button>: <button onClick={upload}  className='but-form dis'>POST</button>}

    
      </form>
 
  
    </div>

    </div>
  )
}

export default Uploadcrop
