import React from 'react';
import emailjs from '@emailjs/browser';

import './ContactUsForm.css'
// emailjs.send(serviceID, templateID, templateParams, publicKey);
// emailjs.send("service_v5gzagl","template_3nqje5k",{
//     from_name: "username",
//     from_email: "email",
//     from_phone: "number",
//     from_zip: "zip",
//     message: "message",
//     from_time: "time",
//     });


const ContactUsForm = () => {
    const handleSubmit = (e) => {
        // const serviceID = "service_v5gzagl";
        // const templateID = "template_3nqje5k";
        const publicKey = "Ru3OjwteMUPoUY34t";
        e.preventDefault();
        // const templateParams = {
        //     from_name: e.target.elements.name.value,
        //     from_email: e.target.elements.email.value,
        //     from_phone: e.target.elements.phone.value,
        //     message: e.target.elements.message.value,
        //     from_time: "anytime",
        // };
        // const templateForm = new FormData();
        // const templateParamsToForm = (templateParams) => {

        //     templateForm.append("from_name", templateParams.from_name);
        //     templateForm.append("from_email", templateParams.from_email);
        //     templateForm.append("from_phone", templateParams.from_phone);
        //     templateForm.append("message", templateParams.message);
        //     templateForm.append("from_time", templateParams.from_time);

        //     return templateForm;
        // }

        // const  contents = templateParamsToForm(templateParams);


        // emailjs.sendForm(serviceID, templateID, contents, publicKey)
        // .then((result) => {
        //     console.log(result.text);
        // }
        // ,(error) => {
        //     console.log(error.text);
        // });
        const contactUsBtn = document.querySelector(".contact-us-submit-btn");
        contactUsBtn.innerHTML = "Sending...";
        contactUsBtn.style.backgroundColor = "#4986c4";
        //if the email is sent successfully set the button to "sent" and background color to green
        const params = {
            from_name: e.target.elements.name.value,
            from_email: e.target.elements.email.value,
            from_phone: e.target.elements.phone.value,
            from_zip: "none",
            message: e.target.elements.message.value,
            from_time: "anytime",
        }
        emailjs.send("service_v5gzagl", "template_3nqje5k", params , "Ru3OjwteMUPoUY34t").then((result) => {
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
        // emailjs.send("service_v5gzagl","template_3nqje5k",{
        //     from_name: e.target.elements.name.value,
        //     from_email: e.target.elements.email.value,
        //     from_phone: e.target.elements.phone.value,
        //     from_zip: "none",
        //     message: e.target.elements.message.value,
        //     from_time: "anytime",
        //     });
    }
    return (
        <div className='contact-us-form-container'>
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
                        {/* <imput type="text" className="form-control" placeholder="Your Name"></imput> */}
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