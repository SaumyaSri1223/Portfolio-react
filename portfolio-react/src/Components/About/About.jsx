import React from "react";
import card from '../../assets/card.png';
import './About.css';

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About me</h1>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={card} style={{ width: '800px',height:'450px',position:'relative',right:'200px'}}/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p style={{overflow:'scroll',maxHeight:'200px'}}>I am a final-year B.Tech student specializing in Computer Science Engineering,
                         with a passion for frontend development. Over the course of my studies, 
                         I have built a solid foundation in web technologies such as HTML, CSS, JavaScript, and React.
                          My academic projects and internships have allowed me to develop and hone my skills in creating responsive, 
                          intuitive, and visually appealing web interfaces.<br></br> In addition to my technical abilities, I am committed to continuous <br></br>
                          learning and enjoy staying updated with the latest trends in web development.<br></br> Whether it's through personal projects, online courses, 
                          or participating in hackathons,
                           I am always looking for opportunities to grow and refine my craft.</p>
                    </div>
                    <div className="about-skills">
                        <div className="skill"><p>HTML & CSS</p><hr style={{ width: "50%" }}></hr></div>
                        <div className="skill"><p>React Js</p><hr style={{ width: "50%" }}></hr></div>
                        <div className="skill"><p>JavaScript</p><hr style={{ width: "50%" }}></hr></div>
                        <div className="skill"><p>Java</p><hr style={{ width: "50%" }}></hr></div>
                    </div>
                </div>
            </div>
            <div className="about-awards">
                <div className="awards">
                    <h1>Zonal Level Runner-Up</h1>
                    <p>CHESS</p>
                </div>
                <hr />
                <div className="awards">
                    <h1>Whack Hack 2.0</h1>
                    <p>ACM</p>
                </div>
            </div>
        </div>
    )
}
export default About;