import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import './Contact.css';


import location1 from '../../assets/location1.svg';
 import email2 from '../../assets/email2.jpg';
// import call from '../../assets/call.svg';
const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            message: data.message,

        }
        try {
            await axios.post("https://getform.io/f/bjjewyjb", userInfo);
            alert("Your message has been sent");
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Contact Me</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Get in touch</h1>
                    <p>If you would like to get in touch with me, please feel free to reach out.<br></br>
                        For any inquiries or opportunities, don’t hesitate to drop me a message through <br></br>
                        the contact form below. I look forward to hearing from you!</p>
                    <div className="contact-detail">
                        <div className="detail">
                             <img src={email2} style={{height:'50px',width:'60px'}}/> 
                             <p>srisaumya.143@gmail.com</p>
                        </div>
                        <div className="detail">
                            {/* <img src={call}/> */}

                        </div>
                        <div className="detail">
                         <img src={location1} style={{height:'50px',width:'60px'}}/> 
                         <p>Lucknow,Uttar Pradesh</p>
                        </div>
                    </div>
                </div>
                <form className="contact-right" action="https://getform.io/f/bjjewyjb" method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name" {...register("name", { required: true })} />      {errors.name && <span>This field is required</span>}
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email"{...register("email", { required: true })} />      {errors.email && <span>This field is required</span>}
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows='8' placeholder="Enter your message here" {...register("message", { required: true })} />       {errors.message && <span>This field is required</span>}
                    <button type="submit" className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}
export default Contact;