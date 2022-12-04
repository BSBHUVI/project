
import './App.css';
import {UserContext} from  './UserContext/UserContext'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
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

function App() {
  return (
    <div className="App">
    <UserContext>
    <ChatContextProvider>
    <Router>
      <Routes>
        <Route path='/project'  element={<Signup/>}/>
        <Route path='/project/Login' element={<Login/>}/>
        <Route path='/project/Home' element={<Navbar/>}>
        <Route path='/project/Home/loancalculator' element={<Loancalculator/>}/>
        <Route path='/project/Home/chat' element={<Chat/>}/>
        <Route path='/project/Home/users' element={<Userinfo/>}/>
        <Route path='/project/Home/Profile' element={<Profile/>}/>
        <Route path='/project/Home/Home' element={<Protectedroutes><Home/></Protectedroutes>}>
          
         

        </Route>
          
        </Route>
       
        <Route path='/project/Home/Upload' element={<Uploadcrop/>}/>

      </Routes>
    </Router>
    </ChatContextProvider>
    </UserContext>
   
  
 
    </div>
  );
}

export default App;
