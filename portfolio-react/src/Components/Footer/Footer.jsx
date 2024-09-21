import React from "react";
import './Footer.css';
import logo from '../../assets/logo.jpeg';
const Footer = () => {
    return (
        <div  className="footer">
            <div className="footer-bottom-left">
                <img src={logo} alt="" style={{marginTop:'7px',marginLeft:'6px'}}/>
                <p className="footer-bottom-right">
                    © 2024 Saumya Srivastava. All rights reserved.</p>
            </div>
            <div className="footer-top-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>

            </div>



        </div>

    )
}
export default Footer;