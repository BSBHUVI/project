import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./profile.css"

import Axios from './Axios'
import { useUserAuth } from "../UserContext/UserContext";
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import { updateProfile } from 'firebase/auth'

import { Edit } from '@mui/icons-material';

function Profile() {
    const {user}=useUserAuth()
    const [loading,setloading]=useState(true);
    const [profile,setprofile]=useState([])
    const [pic,setPic]=useState();
    const [picLoading, setPicLoading] = useState(false);
   
    
    useEffect(()=>{
        Axios.get("/user/"+user.email).then((res)=>{
            setprofile(res.data)
        }).then(setloading(false))

    },[user])
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
      const uploadpic= async(e)=>{
        e.preventDefault()
        await updateProfile(auth.currentUser,{
            photoURL:pic
          })
          console.log("done")
          window.location.reload()
      }
  return (
    <>
    <Link to='/project/Home/Home'><button className='butt'>
  <span className="shadow"></span>
  <span className="edge"></span>
  <span className="front text"> Back to Home
  </span>
</button></Link>

{loading ? (
    <div className='profile'>
    <div className="con">
    <h1>loading...........</h1>
    </div>
     
    </div>
        ) : (
            <div className='profile'>
    <div className="con">
    <IconButton>
    <label htmlFor="image"><Avatar  src={user.photoURL} /></label>
    </IconButton>
    <form className='update' >
   
    <label title='edit image' htmlFor="image"><Edit/> </label>
      <input className='hide' id='image' type="file" p={1.5} accept="image/*" onChange={(e)=>{postdetails(e.target.files[0])}} />
      
      {picLoading?    <button disabled  className='edit'>❌</button>: <button onClick={uploadpic}  className='edit thi'>☑️</button>}
      </form>
    {profile.map((res)=>{
        return <div key={res._id}>
        <h4 className='name'>Name : {res.name}</h4>
            <h4
             className='email'>Email : {res.email}</h4>
            <h4 className='type'>Type : {res.farmers ? "Farmer":"Customer"}</h4>

        </div>
    })}
   
    </div>
     
    </div>
         
        )}
  
    </>
  )
}

export default Profile
