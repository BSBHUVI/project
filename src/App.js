
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

function App() {
  return (
    <div className="App">
    <UserContext>
    <Router>
      <Routes>
        <Route path='/'  element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Home' element={<Navbar/>}>
        <Route path='/Home/loancalculator' element={<Loancalculator/>}/>
        <Route path='/Home/users' element={<Userinfo/>}/>
        <Route path='/Home/Profile' element={<Profile/>}/>
        <Route path='/Home/Home' element={<Protectedroutes><Home/></Protectedroutes>}>
          
         

        </Route>
          
        </Route>
       
        <Route path='/Home/Upload' element={<Uploadcrop/>}/>

      </Routes>
    </Router>
    </UserContext>
   
  
 
    </div>
  );
}

export default App;
