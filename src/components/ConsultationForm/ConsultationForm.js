import React from "react";
import "./ConsultationForm.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import closeBtn from "../../Images/closeButton.svg";

const ConsultationForm = ({ colCount, showForm, setShowForm }) => {
  const handleFormSubmit = () => {
    const getFormData = () => {
      const formData = {
        name: document.querySelector('input[name="name"]').value,
        email: document.querySelector('input[name="email"]').value,
        phone: document.querySelector('input[name="phone"]').value,
        zip: document.querySelector('input[name="zip"]').value,
        message: document.querySelector('input[name="message"]').value,
        preferredTime: document.querySelector('input[name="preferredTime"]').ariaLabel,
      };
      return formData;
    };
    const formData = getFormData();
    // console.log(formData);
    const contactUsBtn = document.querySelector(".contact-us-submit-btn");
    contactUsBtn.innerHTML = "Sending...";
    contactUsBtn.style.backgroundColor = "#4986c4";
    const params = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      from_zip: formData.zip,
      message: formData.message,
      from_time: formData.preferredTime,
    };
    // console.log(params);
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


  }
  return showForm && (
    <div className="consultation-form"
      data-aos="zoom-in-up"
      data-aos-delay={200}
      data-aos-duration="1000"
      data-aos-ofset="200"
      data-aos-anchor-placement="top-center"
    >
      <div className="consultation-form-close-btn">
        <button onClick={() => setShowForm(false)}>
          <img src={closeBtn} className="close-btn" alt="Close" />
        </button>
      </div>
      <Container>
        <div className="consultation-form-container">

          <p className="consultation-area-subtitle">SCHEDULE YOUR</p>
          <p className="consultation-area-title">Free on-site consultation today!</p>
          <Row xs={1} md={colCount || 2}>
            <Col>
              <div 
              data-aos="fade-right"
              data-aos-delay={200}
              data-aos-duration="1000"
              data-aos-ofset="200"
              data-aos-anchor-placement="top-center"
              className="consultation-input">
                <input type="text" placeholder="Name" name="name" />
                <input type="text" placeholder="Email" name="email" />
                <input type="text" placeholder="Phone" name="phone" />
                <input type="text" placeholder="Zip Code" name="zip" />
              </div>
            </Col>
            <Col>
              <div 
              data-aos="fade-left"
              data-aos-delay={200}
              data-aos-duration="1000"
              data-aos-ofset="200"
              data-aos-anchor-placement="top-center"
              className="consultation-col">
                <div className="consultation-input">
                  <p className="consultation-input-title">Describe your project</p>
                  <input className="project-description-input" type="text" placeholder="" name="message" />
                </div>
                <div className="consultation-area-radio-group-title" >
                  <p >Preferred Time to Talk</p>
                </div>
                <div className="consultation-area-radio-group">
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
                    className="consultation-area-button">GET A FREE ESTIMATE NOW</button>
                </div>
              </div>
            </Col>
          </Row>

        </div>
      </Container>
    </div>
  );
};

export default ConsultationForm;
