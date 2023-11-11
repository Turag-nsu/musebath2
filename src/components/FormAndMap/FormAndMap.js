import React from "react";
import "./FormAndMap.css";
import emailjs from "@emailjs/browser";
import { Container, Row, Col, Form } from "react-bootstrap";
import MyMap from "../MyMap/MyMap";

const FormAndMap = () => {
    const handleFormSubmit = () => {
        const getFormData = () => {
            const formData = {
                name: document.querySelector('input[name="name"]').value,
                email: document.querySelector('input[name="email"]').value,
                phone: document.querySelector('input[name="phone"]').value,
                // zip: document.querySelector('input[name="zip"]').value,
                message: document.querySelector('input[name="message"]').value,
                preferredTime: document.querySelector('input[name="preferredTime"]').ariaLabel,
            };
            return formData;
        };
        const formData = getFormData();
        // console.log(formData);
        const contactUsBtn = document.querySelector(".message-area-button");
        contactUsBtn.innerHTML = "Sending...";
        contactUsBtn.style.backgroundColor = "#4986c4";
        const params = {
            from_name: formData.name,
            from_email: formData.email,
            from_phone: formData.phone,
            from_zip: "none",
            message: formData.message,
            from_time: formData.preferredTime,
        };
        console.log(params);
        emailjs
            .send("service_v5gzagl", "template_3nqje5k", params, "Ru3OjwteMUPoUY34t")
            .then(
                (result) => {
                    console.log(result.text);
                    contactUsBtn.innerHTML = "Sent";
                    contactUsBtn.style.backgroundColor = "green";
                    contactUsBtn.style.color = "white";
                },
                (error) => {
                    console.log(error.text);
                    contactUsBtn.innerHTML = "Failed";
                    contactUsBtn.style.backgroundColor = "red";
                    contactUsBtn.style.color = "white";
                }
            );
    };
    return (
        <Container>
            <div className="form-map-area">
                <div className="message-form">
                        <div>
                            <p className="message-area-title">How can we help you?</p>
                            <p className="message-area-subtitle">Please fill out the form below to request repair services from Muse Bath.</p>
                        </div>
                        <div className="message-input">
                            <input type="text" placeholder="Name" name="name" />
                            <input type="text" placeholder="Email" name="email" />
                            <input type="text" placeholder="Phone" name="phone" />
                        </div>
                        <div>
                            <div className="message-col">
                                <div className="message-input">
                                    <p className="message-input-title">Describe your project</p>
                                    <input className="project-description-input" type="text" placeholder="" name="message" />
                                </div>
                                <div className="message-area-radio-group-title" >
                                    <p >Preferred Time to Talk</p>
                                </div>
                                <div className="message-area-radio-group">
                                    <Form.Group className='d-flex'>
                                        <div className="radio-label">
                                            <Form.Check
                                                type="radio"
                                                label="Morning"
                                                name="preferredTime"
                                                id="morning"
                                                aria-label="Morning"
                                            />
                                        </div>
                                        <div className="radio-label">
                                            <Form.Check
                                                type="radio"
                                                label="Evening"
                                                name="preferredTime"
                                                id="evening"
                                                aria-label="Evening"
                                            />
                                        </div>
                                        <div className="radio-label">
                                            <Form.Check
                                                type="radio"
                                                label="Asap"
                                                name="preferredTime"
                                                id="asap"
                                                aria-label="Asap"
                                            />
                                        </div>
                                    </Form.Group>
                                </div>
                                <div>
                                    <button 
                                    onClick={handleFormSubmit}
                                    className="message-area-button">Send Your Message</button>
                                </div>
                            </div>
                        </div>

                </div>
                <div className="input-map-area">
                    <MyMap />
                </div>
            </div>
        </Container>
    );
}
export default FormAndMap;