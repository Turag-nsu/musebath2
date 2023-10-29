import React from 'react';

import './ContactUsForm.css'
const ContactUsForm = () => {
    return (
        <div className='contact-us-form-container'>
            <div className="contact-us-form-title">
                <p>Connect With Us</p>
            </div>
            <div className="contact-us-form-subtitle">
                <p>Ready to Redesign your bathroom?<br></br>Contact Us Today!!!</p>
            </div>
            <div className="contact-us-form-body">
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Name"></input>
                        {/* <imput type="text" className="form-control" placeholder="Your Name"></imput> */}
                        <input type="tel" className="form-control" placeholder="Your Phone"></input>
                        <input type="email" className="form-control" placeholder="Your Email"></input>
                        <textarea className="form-control message-area" placeholder="Write message"></textarea>
                        <button className="contact-us-submit-btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUsForm;