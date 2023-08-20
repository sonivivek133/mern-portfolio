import React, { useState } from 'react'
import Home from '../../pages/Home/Home'
import Menus from '../Menus/Menus';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import './layout.css';

const Layout = () => {

  const [toggle, setToggle] = useState(true);

  const handleToggle = () =>{
       setToggle(!toggle);
  }

  return (
    <div>
      <div className="sidebar-container">
        <div className= {toggle ? "sidebar-toggle sidebar" : "sidebar"}>
       <div className="sidebar-toggele-icon">
       
       <p onClick={handleToggle}> {toggle ? (<AiOutlineDoubleLeft size={30}/>) : (<AiOutlineDoubleRight size={30}/>)} </p>
       </div>
       <Menus toggle = {toggle} />
      </div>
        
      <div className="container">
      <Home/>
      </div>
      </div>
      
    </div>
  )
}

export default Layout;