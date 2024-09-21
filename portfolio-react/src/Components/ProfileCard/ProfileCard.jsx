import React from "react";
import './ProfileCard.css'; // Assuming your CSS is moved to an external file
import profile from '../../assets/profile.jpeg';

const ProfileCard = () => {
    return (
        <div className="container">
            <section>
                <div id="top">
                    <h1 style={{ color: "white" }}>Portfolio Card</h1>
                </div>

                <div className="card" style={{width:'90%',overflow:'hidden',backgroundColor:'black',border:'2px solid black',borderRadius:'20px',boxShadow:'0px 0px 18px 10px white',textAlign:'center',maxWidth:'350px'}}>
                    <div className="up"style={{padding:"20px",backgroundColor:" rgb(102, 187, 239)"}}>
                        <img src={profile} alt="Profile Image of Saumya Srivastava" style={{ border: '6px solid white', height: '150px', width: '150px', boxShadow: '0px 0px 18px 10px', borderRadius: '50%' }} />
                    </div>
                    <div className="body">
                        <h2 style={{ color: "white", textAlign: "center" }}><b>Saumya Srivastava</b></h2>
                        <p style={{ color: "aliceblue", textAlign: "center" }}>Software Engineer</p>
                        <p style={{ color: "aliceblue", textAlign: "center" }}>
                            Passionate developer, exploring<br />
                            more problem solving in building <br />
                            scalable software.
                        </p>
                    </div>
                    <div className="bottom" style={{ fontSize: "20px", textAlign: "center" }}>
                        <a href="#">
                            <i className="fa-brands fa-instagram" style={{ color: "white", marginLeft: "20px" }}></i>
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-linkedin" style={{ color: "white", marginLeft: "20px" }}></i>
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-github" style={{ color: "white", marginLeft: "20px" }}></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProfileCard;
