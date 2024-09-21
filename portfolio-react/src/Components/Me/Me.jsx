import React from "react";
import profile from '../../assets/profile.jpeg';
import './Me.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Me=()=>{
    return(
        <div id="me"   className="me">
            <img src={profile} alt=""style={{border:'6px solid white'}} />
            <h1><span>I'm Saumya Srivastava</span><br></br> Software Developer</h1>
            <br></br>
            <p>I'm a passionate frontend developer, with a strong background in crafting visually<br></br>
            appealing and highly functional web applications.I excel at building responsive,<br></br>dynamic  and accessible
            user interfaces.</p>
            <div className="btn">
                <div className="connectme"><AnchorLink  offset={50} href='#contact'style={{color:'white',textDecoration:'none'}}>Connect with Me</AnchorLink></div>
                <div className="resume"> <a href="https://drive.google.com/file/d/1SyYAsaiOixTZlY7BHkVCLCNZpsi0tFDy/view?usp=drive_link"style={{color:'white',textDecoration:'none'}}>My Resume</a></div>
            </div>
        </div>
       
    )
}
export default Me;
