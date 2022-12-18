
import './App.css';
import {UserContext} from  './UserContext/UserContext';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Profile from './components/Profile';
import Protectedroutes from './components/Protectedroutes';
import Uploadcrop from './components/Uploadcrop';
import Navbar from './components/Navbar';
import Userinfo from './components/Userinfo';
import Loancalculator from './components/Loancalculator';
import Chat from './components/Chat';
import { ChatContextProvider } from './UserContext/ChatContext';
import Msp from './components/Msp';
import Orders from './components/Orders';
import Requested from './components/Requested';

import Dailyprice from './components/Dailyprice';
import Yojanas from './components/Yojanas';




function App() {
 

  return (
    
     <Router>
    <UserContext>
    <ChatContextProvider>
   
      <Routes>
        <Route path='/project'  element={<Signup/>}/>
        <Route path='/project/Login' element={<Login/>}/>
        <Route path='/project/Home' element={<Navbar/>}>
        <Route path='/project/Home/loancalculator' element={<Loancalculator/>}/>
        <Route path='/project/Home/msp' element={<Msp/>}/>
        <Route path='/project/Home/orders' element={<Orders/>}/>
        <Route path='/project/Home/requested' element={<Requested/>}/>
        <Route path='/project/Home/chat' element={<Chat/>}/>
        <Route path='/project/Home/users' element={<Userinfo/>}/>
        <Route path='/project/Home/prices' element={<Dailyprice/>}/>
        <Route path='/project/Home/yojana' element={<Yojanas/>}/>
        <Route path='/project/Home/Profile' element={<Profile/>}/>
        
        <Route path='/project/Home/Home' element={<Protectedroutes><Home/></Protectedroutes>}>
          
         

        </Route>
          
        </Route>
       
        <Route path='/project/Home/Upload' element={<Uploadcrop/>}/>

      </Routes>
  
    </ChatContextProvider>
    </UserContext>
    </Router>
   
  
 
 
  );
}

export default App;
