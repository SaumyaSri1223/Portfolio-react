import React, { useState } from "react";
 import logo from '../../assets/logo.jpeg';
 import AnchorLink from 'react-anchor-link-smooth-scroll';
 import { Link } from 'react-router-dom';
 import menu_open from '../../assets/menu_open.png';


// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';
const Navbar = () => {
    const [menu,setMenu]=useState("Home");
    return (
        <div className="navbar">
            <Link to="/ProfileCard"className="logo"><img src={logo}  /> </Link>
            <img src={menu_open} alt="" className="mob"/>
            {/* <div id="logo">
            <a href="http://127.0.0.1:5500/college16.html"id="l">
            <FontAwesomeIcon icon={faUser} />
                </a></div> */}
            <div className="nav-menu">
                <ul>
                    <li><AnchorLink classname="anchor-link"style={{color:'white',textDecoration:'none'}} href='#home' ><p onClick={()=>setMenu("Home")}>Home</p></AnchorLink></li>
                    <li><AnchorLink classname="anchor-link"style={{color:'white',textDecoration:'none'}} offset={50} href='#about' ><p onClick={()=>setMenu("About")}>About</p></AnchorLink></li>
                    <li><AnchorLink classname="anchor-link"style={{color:'white',textDecoration:'none'}} offset={50} href='#projects' ><p onClick={()=>setMenu("Projects")}>Projects</p></AnchorLink></li>
                    <li><AnchorLink classname="anchor-link"style={{color:'white',textDecoration:'none'}} offset={50} href='#contact' ><p onClick={()=>setMenu("Contact")}>Contact</p></AnchorLink></li>

                   
                </ul>
            </div>

        </div>

    )
}
export default Navbar;