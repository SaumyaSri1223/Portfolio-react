import React from "react";
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.png';
import './Project.css';



const Project=()=>{
    return(
        <div id="projects" className="project">
            <div className="project-title">
            <h1>Projects</h1>
            </div>
            <div className="orphanage">
                <img src={p2} style={{ width: '800px',height:'420px',position:'relative',right:'1px',top:'20px'}}/>
                <div className="technologies">
                    <h1 className="head">Orphanage Management System</h1>
                   <p>For My Orphanage Management System, I designed and developed a comprehensive web application using HTML, CSS, JavaScript, and React.
                    This project was created with the goal of enhancing the efficiency and accessibility of orphanage operations,
                    providing a user-friendly interface for managing both administrative tasks and daily activities.</p>
                    <h1 className="head">Challenges</h1>
                    <p>1. Performance Optimization: Maintaining optimal performance, especially with a feature-rich application, was critical.
                    These practices helped in reducing load times and enhancing the overall efficiency of the website.<br></br>
                    2. Responsive Design: Creating a responsive design that provided a seamless experience across various devices and screen sizes was essential. 
                    Using CSS Flexbox and Grid, I crafted a layout that adapted fluidly to different viewports.</p>
                </div>
            </div>
            
            <div className="Online-Food ">
                <img src={p3}style={{ width: '800px',height:'460px',position:'relative',right:'1px',top:'20px'}}/>
                <div className="technologies">
                    <h1 className="head"> Online Food Delivery</h1>
                    <p> I developed an Online Food Delivery Platform to enhance my skills in web development using HTML, CSS, JavaScript, and React.
                    This project aimed to create a seamless and user-friendly interface for ordering food online, simulating real-world functionality and user experience.</p>
                    <h1 className="head">Challenges</h1>

                    <p>1. User Interface Design: I designed a modern and intuitive UI with HTML and CSS, focusing on a clean layout and responsive design.
                     Using CSS Grid and Flexbox, I ensured the application was fully responsive, providing an optimal viewing experience on desktops, tablets, and mobile devices.<br></br>
2. Interactive Features: Leveraging JavaScript and React, I implemented dynamic features such as a real-time menu display, interactive filters, and a shopping cart.
React’s component-based architecture allowed for reusable and maintainable code, enhancing the user experience with smooth, interactive elements.</p>
                </div>
            </div>
        </div>
    )
}
export default Project;