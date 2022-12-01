import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./Navbar.css";
import avatar from "../Images/th.jpeg";
import Axios from './Axios'

import { useNavigate } from "react-router";
import { useUserAuth } from "../UserContext/UserContext";

import { Link,Outlet} from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

import CloseIcon from "@mui/icons-material/Close";

import { Avatar, IconButton } from "@mui/material";

function Navbar() {

  const [burgerStatus, setburgerStatus] = useState(false);
  const { logout } = useUserAuth();
  const {user}=useUserAuth()
  const [profile,setprofile]=useState([])
  const navigate = useNavigate();
  useEffect(()=>{
    Axios.get("/user/"+user.email).then((res)=>{
        setprofile(res.data)
    })

},[user])
  
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/project");
    } catch (error) {
      console.log(error.message);
    }
  };
  

  return (
    <>
      <Container>
        <div>
          <Link to="/project/Home/Profile" className="sub">
            <Avatar src={avatar} onClick={() => setburgerStatus(false)} />
          </Link>
        </div>

        <Menu>
          <IconButton>
            <Link to="project/Home/Home">
              <h4 className="text">Farmer Choice</h4>
            </Link>
          </IconButton>
        </Menu>

        <RightMenu>
          <CustomMenu fontSize="large" onClick={() => setburgerStatus(true)} />
        </RightMenu>
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <IconButton onClick={() => setburgerStatus(false)}>
              <CustomClose />
            </IconButton>
          </CloseWrapper>
         {profile.map((res)=>{
          return <div key={res._id}>
            {res.farmers &&<Link to="/project/Home/Upload" className="sub">
            <button className="ui"> upload crop</button>
          </Link> }
          </div>
         })}
          

          <Link to="/project/Home/Home" className="sub">
            <button onClick={() => setburgerStatus(false)} className="ui">
              {" "}
              Home
            </button>
          </Link>
          <Link to="/project/Home/users" className="sub">
            <button onClick={() => setburgerStatus(false)} className="ui">
              {" "}
              User List
            </button>
          </Link>
          <Link to="/project/Home/Home" className="sub">
            <button onClick={() => setburgerStatus(false)} className="ui">
              {" "}
              MSP
            </button>
          </Link>
          <Link to="project/Home/Home" className="sub">
            <button onClick={() => setburgerStatus(false)} className="ui">
              {" "}
              Krishi-Kshetra
            </button>
          </Link>
          <Link to="/project/Home/loancalculator" className="sub">
            <button onClick={() => setburgerStatus(false)} className="ui">
              {" "}
              Loan-Calc
            </button>
          </Link>
          <button className="sub ui" onClick={handleLogout}>
            logout
          </button>
        </BurgerNav>
      </Container>
      <Outlet/>
      
    </>
  );
}

export default Navbar;
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  background-color: #e3f2fd;
  background-image: url("https://i.postimg.cc/sXmyqkC3/9.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 1px solid #000;
  border-bottom: 1px solid #f5bb83;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  border: 2px solid black;
  z-index: 1000;
`;
const Menu = styled.div`
  display: flex;

  align-items: center;

  justify-content: center;
  flex: 1;
  a {
    font-weight: 200;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }
`;
const RightMenu = styled.div`
  display: flex;

  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin: 10px;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  border: 2px solid black;
  overflow: scroll;

  right: 0;
  background: rgb(225, 163, 81);
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 4px;
  display: flex;
  text-align: start;
  flex-direction: column;
  transform: ${(props) => (props.show ? `translateX(0)` : `translateX(100%)`)};
  transition: transform 0.2s;
  li {
    padding: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
