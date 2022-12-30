import React from 'react'


import { Link } from 'react-router-dom'
import './WelcomePage.css';


function Startpage() {
  return (
    <div className="welcome-page" style={{ backgroundImage: 'url("https://th.bing.com/th/id/OIP.3WQ8zwkt39008-ezLvaqAAHaEo?w=289&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7")',opacity:"1.4", backgroundSize: 'cover', padding: '20px',width:"100%",height:"100vh" }}>
      <h1 className="welcome-header" style={{ color: 'white',textAlign:"center",marginBottom:"2rem",fontWeight:"900" }}>Welcome to the Farmer's Hub!</h1>
      <p className="welcome-overview" style={{ color: 'white',textAlign:"center",fontWeight:"bold" }}>
        This web application is designed to help farmers gain more profit through selling crops online .
      </p>
      <div style={{display:"flex",width:"100%",height:"100vh",alignItems:"center",justifyContent:"center"}}>
    <Link to="/project/Home/Home"> <button className="welcome-button" style={{ backgroundColor: '#7ED321', color: 'white', padding: '10px 20px',cursor:"pointer" }}>Get Started ▶️</button></Link>
    </div>
     </div>
  );
}

export default Startpage

