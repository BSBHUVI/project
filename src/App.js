
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
import Error from './components/Error';
import Startpage from './components/Startpage';
import Aboutcrops from './components/Aboutcrops';
import ContactPage from './components/ContactPage';
import AboutFarmers from './components/AboutFarmers';
import Mycrops from './components/Mycrops';
import Weather from './components/Weather';
import Agricultural from './components/Agricultural';
import MapComponent from './components/MapComponent';






function App() {
 

  return (
    
    
     <Router>
    <UserContext>
    <ChatContextProvider>
  
   
      <Routes>
        <Route path='/project'  element={<Signup/>}/>
        <Route path='/project/welcome' element={<Protectedroutes><Startpage/></Protectedroutes>}/>
        <Route path='/project/Login' element={<Login/>}/>
        <Route path='/project/Home' element={<Protectedroutes><Navbar/></Protectedroutes>}>
        <Route path='/project/Home/loancalculator' element={<Loancalculator/>}/>
        <Route path='/project/Home/msp' element={<Msp/>}/>
        <Route path='/project/Home/Agriculturaldata' element={<Agricultural/>}/>
   

        <Route path='/project/Home/orders' element={<Orders/>}/>
        <Route path='/project/Home/aboutcrops' element={<Aboutcrops/>}/>
        <Route path='/project/Home/requested' element={<Requested/>}/>
        <Route path='/project/Home/chat' element={<Chat/>}/>
        <Route path='/project/Home/users' element={<Userinfo/>}/>
        <Route path='/project/Home/prices' element={<Dailyprice/>}/>
        
        <Route path='/project/Home/Profile' element={<Profile/>}/>
        <Route path='/project/Home/contact' element={<ContactPage/>}/>
        <Route path='/project/Home/aboutfarmers' element={<AboutFarmers/>}/>
        <Route path='/project/Home/mycrops' element={<Mycrops/>}/>
        <Route path='/project/Home/weather' element={<Weather/>}/>
        <Route path='/project/Home/map' element={<MapComponent/>}/>
        
        <Route path='/project/Home/Home' element={<Protectedroutes><Home/></Protectedroutes>}>
          
         

        </Route>
          
        </Route>
       
        <Route path='/project/Home/Upload' element={<Uploadcrop/>}/>
<Route path='*' element={<Error/>}/>
      </Routes>
    
  
    </ChatContextProvider>
    </UserContext>
    </Router>
   
  
 
 
  );
}

export default App;
