import React from 'react'
import './chat.css'
import avatar from "../Images/th.jpeg";
import { Avatar, IconButton } from "@mui/material";
import { SearchOutlined,   ArrowForwardIos } from "@mui/icons-material";
import { useUserAuth } from '../UserContext/UserContext';
import { useState } from 'react';
import {arrayUnion, collection,doc,getDoc,getDocs,onSnapshot,query,serverTimestamp,setDoc,updateDoc,where} from 'firebase/firestore'
import {db} from '../firebase'
import { useEffect } from 'react';
import { useContext } from 'react';
import { ChatContext } from '../UserContext/ChatContext';
import {v4 as uuid} from 'uuid'
import { useRef } from 'react';
import { Link } from 'react-router-dom';





function Chat() {
  const [username,setUsername]=useState("")
  const [userr,setUserr]=useState(null)
  const [err,setErr]=useState(false);
  const {user}=useUserAuth()
  const {dispatch}=useContext(ChatContext)
  const [chats,setChats]=useState([])
  const {data}=useContext(ChatContext)
  const [messages,setMessages]=useState([])
  const [text,setText]=useState("")
  const ref=useRef()
  const [set,setset]=useState(false)
  
  
  useEffect(()=>{
    ref.current?.scrollIntoView({behavior:"smooth"})
  },[messages])
 
  useEffect(()=>{
    const unsub1=onSnapshot(doc(db,"chats",data.chatId),(doc)=>{
      doc.exists() && setMessages(doc.data().messages)
    })
    return ()=>{
      unsub1()
    }
  },[data.chatId])
 
 
  useEffect(()=>{
    const getChats=()=>{
      const unsub=onSnapshot(doc(db,"userchats",user.uid),(doc)=>{
        setChats(doc.data())
  
      })
      return ()=>{
        unsub()
      }

    }
   

  user.uid && getChats()
  },[user.uid],user)
 
  const handleSearch= async ()=>{
    const q=query(collection(db,"users"),where("displayName","==",username));
    try{
      const querySnapshot= await getDocs(q);
      querySnapshot.forEach((doc)=>{
        setUserr(doc.data())
      })
      setUsername("")
     

    }catch(err){
      setErr(true)

    }
   
  }
 
  const handleSelect= async ()=>{
    const combinedId=user.uid>userr.uid?user.uid+userr.uid:userr.uid+user.uid
    try{
      const res=await getDoc(doc(db,"chats",combinedId))
      if (!res.exists()){
        await setDoc(doc(db,"chats",combinedId),{messages:[]})
        await updateDoc(doc(db,"userchats",user.uid),{
          [combinedId+".userInfo"]:{
            uid:userr.uid,
            displayName:userr.displayName

          },
          [combinedId+".date"]:serverTimestamp()
        });
        await updateDoc(doc(db,"userchats",userr.uid),{
          [combinedId +".userInfo"]:{
            uid:user.uid,
            displayName:user.displayName

          },
          [combinedId+".date"]:serverTimestamp()
        });
        
      }

    }catch(err){
      setUserr(null)
      setUsername("")
    
    }
    
  }
  const handlesel=(u)=>{
    setset(true)
    dispatch({type:"CHANGE_USER",payload:u})
  }
  const handlesent= async (e)=>{
    e.preventDefault()
    await updateDoc(doc(db,"chats",data.chatId),{
      messages:arrayUnion({
        id:uuid(),
        text,
        senderId:user.uid,
        date:Date.now()
      })
    })
    await updateDoc(doc(db,"userchats",user.uid),{
      [data.chatId+".lastMessage"]:{
        text
      },
      [data.chatId+".date"]: serverTimestamp()
    })
    await updateDoc(doc(db,"userchats",data.user.uid),{
      [data.chatId+".lastMessage"]:{
        text
      },
      [data.chatId+".date"]: serverTimestamp()
    })
    setText("")


  }
    
  return (
   <>
    <div className='chat-conta'>
    <div className="sidebar">

    <div className="chatprofile">
    <p>Chat</p>
   <span className='bi'><IconButton className='bi'>
   <Link to="/project/Home/Profile"><Avatar src={user.photoURL}/></Link> 
    </IconButton>
    </span> 
    <p className='bi'> {user.displayName}</p>
       
        
       
    </div>
    <div className="sidebar__search">
        <div className="sidebar__searchcontainer">
          <IconButton  onClick={handleSearch} >
          <SearchOutlined  />
            
          </IconButton>
          <input type="text"  value={username}  onChange={(e)=>setUsername(e.target.value)}  placeholder="search..." />
        
        </div>
      </div>
    
   
    <div className="chatusers">
    {err && <span>user not found</span>}
     {userr && <div className="chats" onClick={handleSelect}>
    <Avatar className='avatar' src={avatar}  />
    
  
    <p>{userr.displayName}</p>

    <p className='emm'>{userr.email}</p>
   
    </div> }
    {Object.entries(chats)?.sort((a,b)=>b[1].date-a[1].date).map(chat=>(
      <div className="chats" key={chat[0]} onClick={()=>handlesel(chat[1].userInfo)}>
    <Avatar className='avatar' src={avatar}  />
    
  
    <p>{chat[1].userInfo?.displayName}</p>
    <h6 className='emm'><p className='lm'>lastMessage : </p> {chat[1].lastMessage?.text}</h6>
    </div>
   

    )

    )}
    
   
    
    </div>


    </div>
    <div className="chatbox">
   <div className="chat__header">
        <Avatar />
        {set && <div className="chat__headerinfo">
            <h3>{data.user?.displayName}</h3>
            <p>{navigator.onLine ? 'online':'offline'}</p>
        </div>}
       
    </div>
    { <div className="chat__body">
    { set && messages.map(m=>(
      <div ref={ref} className={`message ${m.senderId===user.uid && "owner"}`} key={m.id}>
      <p>{m.text}</p>



      </div>

    ))}

    </div>}
    <div className="chat__footer">
     
        <form >
            <input value={text} onChange={(e)=>setText(e.target.value)}  placeholder='type a message' type='text' />
            <button className='opp' onClick={handlesent}  type='submit'>
            <ArrowForwardIos/>



            </button>
            



           
        </form>
    
    </div>
        
    </div>

    </div>
   </>
  )
}

export default Chat
