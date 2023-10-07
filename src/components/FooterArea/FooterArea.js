import React from "react";
import "./FooterArea.css";
import { Container, Row, Col } from "react-bootstrap";
import socialIcons from "../../Images/Social-Media-Icons.svg"
const FooterArea = () => {
    return (
        <div className="footer-area">

            <Container className="">
                <Row className="footer-row">
                    <Col className="footer-col1" xs={6}>
                        <div className="footer-area1">
                            <p class="footer-logo">Muse Bath</p>
                            <p class="footer-subtitle">Elevate your bathroom to a tranquil sanctuary.</p>
                            <img src={socialIcons} alt=""></img>
                        </div>
                        <div className="footer-area2">
                            <p class="footer-title">Quick Menu</p>
                            <p class="footer-subtitle">Home</p>
                            <p class="footer-subtitle">Service</p>
                            <p class="footer-subtitle">Projects</p>
                            <p class="footer-subtitle">Blog</p>
                        </div>
                    </Col>
                    <Col className='footer-gap' xs={1}></Col>
                    <Col className="footer-col2" xs={5}>
                        <div className="footer-area3">
                            <p class="footer-title">Schedule Your Estimation</p>
                            <p class="footer-subtitle">Call us:<br></br>3144082708</p>
                            <p class="footer-subtitle">Mail us us:<br></br>info@musebath.us</p>
                        </div>
                        <div className="footer-area4">
                            <p class="footer-title">Our Address</p>
                            <p class="footer-subtitle">7477 wise avenue<br></br>Richmond heights MO 63117</p>
                        </div>

                    </Col>
                </Row>
            </Container>

        </div>

    );
};
export default FooterArea;