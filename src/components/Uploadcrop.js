import React from 'react'
import Navbar from './Navbar'
import './upload.css'
import { useState } from 'react'
import Axios from '../components/Axios'
import { useUserAuth } from "../UserContext/UserContext";

function Uploadcrop() {
    const {user}=useUserAuth()
    
   
    const [pic,setPic]=useState();
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [number,setNumber]=useState("");

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
            console.log(data.url.toString());
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
    const upload= ()=>{
        if(name==="" || number==="" || price==="" || pic===""){
            alert("please fill all the values")
        }
        else{
            Axios.post('/user/upload',{

                
                email:user.email,
                name:name,
                price:price,
                number:number,
                pic:pic
                

            }).then(()=>{
              alert("posted succesfully")
            })
        }
    }
  
  return (
    <div>
    <Navbar/>
 
    <div className='post-container'>
    <h1 className='post-heading'>POST THE NEW CROPS</h1>
      <form className='form-container' >
      <input value={name} onChange={(e)=>setName(e.target.value)} className='input-text' type="text" placeholder='Enter the Crop Name ' />
      <input  value={price} onChange={(e)=>setPrice(e.target.value)}  className='input-text' type="text" placeholder='Enter the Price' />
      <input  value={number} onChange={(e)=>setNumber(e.target.value)}  className='input-text' type="text" placeholder='Enter the contact number'/>
      <label htmlFor="image">Select the crop image</label>
      <input  name='image' type="file" p={1.5} accept="image/*" onChange={(e)=>{postdetails(e.target.files[0])}} />
   {picLoading?    <button disabled  className='but-form2'>POST</button>: <button onClick={upload}  className='but-form dis'>POST</button>}

    
      </form>
 
  
    </div>

    </div>
  )
}

export default Uploadcrop
