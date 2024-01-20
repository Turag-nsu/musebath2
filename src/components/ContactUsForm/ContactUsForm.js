import React from 'react';
import emailjs from '@emailjs/browser';
import './ContactUsForm.css'

const ContactUsForm = () => {
    const handleSubmit = (e) => {

        e.preventDefault();

        const contactUsBtn = document.querySelector(".contact-us-submit-btn");
        contactUsBtn.innerHTML = "Sending...";
        contactUsBtn.style.backgroundColor = "#4986c4";
        const params = {
            from_name: e.target.elements.name.value,
            from_email: e.target.elements.email.value,
            from_phone: e.target.elements.phone.value,
            from_zip: "none",
            message: e.target.elements.message.value,
            from_time: "anytime",
        }
        emailjs.send("service_v5gzagl", "template_3nqje5k", params, "Ru3OjwteMUPoUY34t").then((result) => {
            console.log(result.text);
            contactUsBtn.innerHTML = "Sent";
            contactUsBtn.style.backgroundColor = "green";
            contactUsBtn.style.color = "white";
        }, (error) => {
            console.log(error.text);
            contactUsBtn.innerHTML = "Failed";
            contactUsBtn.style.backgroundColor = "red";
            contactUsBtn.style.color = "white";
        });
    }
    return (
        <div
            data-aos="fade-left"
            data-aos-delay={200}
            data-aos-duration="1000"
            data-aos-ofset="200"
            className='contact-us-form-container'>
            <div className="contact-us-form-title">
                <p>Connect With Us</p>
            </div>
            <div className="contact-us-form-subtitle">
                <p>Ready to Redesign your bathroom?<br></br>Contact Us Today!!!</p>
            </div>
            <div className="contact-us-form-body">
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Name" name='name'></input>
                       
                        <input type="tel" className="form-control" placeholder="Your Phone" name="phone" />
                        <input type="email" className="form-control" placeholder="Your Email" name="email"></input>
                        <textarea className="form-control message-area" placeholder="Write message" name="message"></textarea>
                        <button
                            type='submit'
                            className="contact-us-submit-btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUsForm;