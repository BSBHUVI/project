import React, {  useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import {useUserAuth} from '../UserContext/UserContext'
import Axios from './Axios'
import {doc,setDoc} from 'firebase/firestore'
import { auth, db } from "../firebase";
import { updateProfile } from "firebase/auth";


function Signup() {
  
  const {signup}=useUserAuth();
  let navigate=useNavigate()


  
 
  const [choice,setchoice]=useState("");
  
  const [Name, SetName] = useState("");
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [loading,setloading]=useState(false)
  useEffect(()=>{
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if(isLoggedIn){
      navigate("/project/welcome")
    }

  },[navigate])
  

  const submit= async (e)=>{
    e.preventDefault();
    setloading((prev)=>!prev)
    try{
      if (Name!==""){
       

        const res=await signup(Email,Password)
        localStorage.setItem('isLoggedIn', 'true');
        await updateProfile(auth.currentUser,{
          displayName:Name
        })
        
        await Axios.post('/user/new',{
          name:Name,
          farmers:choice==="farmer",
          email:Email

        })
        await setDoc(doc(db,"users",res.user.uid),{
          uid:res.user.uid,
          displayName:Name,
          email:res.user.email
        })
        await setDoc(doc(db,"userchats",res.user.uid),{
          
        })
        
        

        navigate('/project/welcome')
      }else{
        setloading((prev)=>!prev)
        alert("Please Enter the Name")
      }
     
     
      }catch(err){
        setloading((prev)=>!prev)
        alert(err.message)
      }
    
   

  }

  return (
    <div className="container1">
     {loading && <div className="wrapper">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="shadow1"></div>
    <div className="shadow1"></div>
    <div className="shadow1"></div>
    
</div>}
       {!loading &&  <div className="card1">
       <h1 className="tit">E-commerce Application for Farmers</h1>
     
     <form className="form-container1">
          <h1 className="header1">SIGN UP</h1>
          <input
          autoComplete="off"
            value={Name}
            onChange={(e) => SetName(e.target.value)}
            placeholder="Enter the Name"
            className="email1s"
            type="text"
          />
          <input
          autoComplete="off"
            value={Email}
            onChange={(e) => SetEmail(e.target.value)}
            placeholder="Enter the Email"
            className="email1s"
            type="email"
          />
          <input
          autoComplete="off"
            value={Password}
            onChange={(e) => SetPassword(e.target.value)}
            placeholder="Enter the password"
            className="pass1s"
            type="password"
          />
          
  <select value={choice} onChange={(e)=>{setchoice(e.target.value)}}  className="pass1s" name="type" id="type">
   <option value="" >Choose Your Role</option>
    <option value="customer">Customer</option>
    <option value="farmer">Farmer</option>
    
  </select>

          <button onClick={submit} className="cssbuttons-io-button1s">
            {" "}
            SIGN UP
            <div className="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>

          <p className="acc1s">
            Already have an account ? <Link to="/project/Login">LOGIN</Link>{" "}
          </p>
        
        </form>
      </div>}
    </div>
  );
}

export default Signup;
