import React from "react";
import "./FormAndMap.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import MyMap from "../MyMap/MyMap";

const FormAndMap = () => {
    return (
        <Container>
            <div className="form-map-area">
                <div className="message-form">
                        <div>
                            <p className="message-area-title">How can we help you?</p>
                            <p className="message-area-subtitle">Please fill out the form below to request repair services from Muse Bath.</p>
                        </div>
                        <div className="message-input">
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Email" />
                            <input type="text" placeholder="Phone" />
                        </div>
                        <div>
                            <div className="message-col">
                                <div className="message-input">
                                    <p className="message-input-title">Describe your project</p>
                                    <input className="project-description-input" type="text" placeholder="" />
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
                                    <button className="message-area-button">Send Your Message</button>
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