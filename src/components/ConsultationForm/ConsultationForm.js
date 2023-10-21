import React from "react";
import "./ConsultationForm.css";
import { Container, Row, Col, Form } from "react-bootstrap"; // Import Form
import CustomButton2 from "../CustomButton/CustomButton";
import closeBtn from "../../Images/closeButton.svg"

const ConsultationForm = () => {
  return (
    <div className="consultation-form">
      <div className="consultation-form-close-btn">
        <button>
          <img src={closeBtn} />
        </button>
      </div>
      <Container>
        <p className="consultation-area-subtitle">SCHEDULE YOUR</p>
        <p className="consultation-area-title">Free on-site consultation today!</p>
        <Row xs={1} md={2}>
          <Col>
            <div className="consultation-input">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="Zip Code" />
            </div>
          </Col>
          <Col>
            <div className="consultation-col">
              <div className="consultation-input">
                <p className="consultation-input-title">Describe your project</p>
                <input className="project-description-input" type="text" placeholder="" />
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
                <button className="consultation-area-button">GET A FREE ESTIMATE NOW</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <Form.Check
                    type="radio"
                    label="Asap"
                    name="preferredTime"
                    id="asap"
                    aria-label="Asap"
                  /> */}
    </div>
  );
};

export default ConsultationForm;
