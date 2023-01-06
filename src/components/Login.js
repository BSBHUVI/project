import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../UserContext/UserContext";
import "./Signup.css";


function Login() {
    const navigate=useNavigate()
   
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const {login}=useUserAuth();
  const [loading,setloading]=useState(false)

  useEffect(()=>{
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if(isLoggedIn){
      navigate("/project/welcome")
    }

  },[navigate])
 

  const handlesubmit= async (e)=>{
    setloading((prev)=>!prev)
    e.preventDefault()
    try{
      await login(Email,Password)
      localStorage.setItem('isLoggedIn', 'true');
      navigate("/project/welcome")

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
      { !loading &&  <div className="card1">
      <h1 className="tit">E-commerce Application for Farmers</h1>
     
      <form className="form-container1">
          <h1 className="header1">LOGIN</h1>

          <input
          autoComplete="off"
            value={Email}
            onChange={(e) => SetEmail(e.target.value)}
            placeholder="Enter the Email"
            className="email1"
            type="email"
          />
          <input
          autoComplete="off"
            value={Password}
            onChange={(e) => SetPassword(e.target.value)}
            placeholder="Enter the password"
            className="pass1"
            type="password"
          />

          <button onClick={handlesubmit} className="cssbuttons-io-button1">
            {" "}
            LOGIN
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

          <p className="acc1">
            Don't have an account ? <Link to="/project">SIGN UP</Link>
          </p>
        </form>
      </div>}
    </div>
  );
}

export default Login;
