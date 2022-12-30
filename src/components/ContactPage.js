import React, { useState } from 'react';
import './ContactPage.css';
import Axios from './Axios'

function ContactPage() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,SetPhone]=useState("")
    const [message,setMessage]=useState("")
    const contact= (e)=>{
        e.preventDefault()
       try{
        Axios.post("/user/contactme",{
            name:name,
            email:email,
            phone:phone,
            message:message
        }).then(()=>{
            alert("Query sent successfully")
        }).catch((err)=>{
            alert(err)
        })
       }catch(err){
        console.log(err)
       }
        

    }
  return (
    <div className="contact-page" style={{ backgroundColor: '#E8F5E9', padding: '20px',marginTop:'2rem' }}>
      <h1 className="contact-header">Contact Us</h1>
      <p className="contact-description">
        If you have any questions or comments about our web application, please don't hesitate to contact us. You can reach us by email at <a target="_blank" rel='noreferrer' href="mailto:sce19cs090@sairamtap.edu.in?subject='Problem Query'&body='Please type your problem'">sce19cs090@sairamtap.edu.in</a> .
      </p>
      <form onSubmit={contact} className="contact-form">
        <label className="contact-label">
          Name:
          <input value={name} onChange={(e)=>setName(e.target.value)} className="contact-input" type="text" name="name" />
        </label>
        <br />
        <label className="contact-label">
          Email:
          <input value={email} onChange={(e)=>setEmail(e.target.value)}  className="contact-input" type="email" name="email" />
        </label>
        <br />
        <label className="contact-label">
          Phone:
          <input value={phone} onChange={(e)=>SetPhone(e.target.value)}  className="contact-input" type="tel" name="phone" />
        </label>
        <br />
        <label className="contact-label">
          Message:
          <textarea value={message} onChange={(e)=>setMessage(e.target.value)}  className="contact-input" name="message" />
        </label>
        <br />
        <input className="contact-button" type="submit" value="Submit" />
      </form>
      <div id="demo1">

  <h1 className="contact-header" style={{margin:"4rem"}} >Direct Contact :</h1>
  <a style={{margin:"2rem"}} href="http://www.instagram.com/bsbhuvi/" target="_blank" rel='noreferrer'><img width="70" height="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png" alt="insta link"/></a>
  <a style={{margin:"2rem"}}  href="tel:8884883404" target="_blank" rel='noreferrer'><img width="70" height="50" src="https://www.kindpng.com/picc/m/194-1943740_phone-icons-80-free-icons-phone-symbol-in.png" alt="call"/></a>
 <a style={{margin:"2rem"}}  href="https://api.whatsapp.com/send?phone=<India-91><8884883404>" target="_blank" rel='noreferrer'><img width="70" height="50" src="https://www.freepnglogos.com/uploads/whatsapp-png-image-9.png" alt="not found"/></a>
 </div>
    </div>
  );
}

export default ContactPage;
