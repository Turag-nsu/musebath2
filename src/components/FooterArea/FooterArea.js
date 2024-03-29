import React from "react";
import "./FooterArea.css";
import { Container, Row, Col } from "react-bootstrap";
import footerLine from "../../Images/footerLine.svg"
import fbLogo from "../../Images/facebook-logo.png"
import instaLogo from "../../Images/instragram-logo.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../Images/musebath-logo.svg"
const FooterArea = () => {
    const [selected, setSelected] = useState(null);
    const scrollToSection = (sectionId) => {
        setSelected(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ block: "center", behavior: 'smooth' });
        }
    };
    const checkServiceClick = () => {
        if (selected === 'services') {
            scrollToSection('services');
            setSelected(null);
        }
    };
    React.useEffect(() => {
        checkServiceClick();

    }, []);


    const handleLinkClick = () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        navbarToggler.click();
    };
    return (
        <div className="footer-area">

            <Container className="">
                <Row className="footer-row">
                    <Col className="footer-col1" xs={6}>
                        <div className="footer-area1">
                            <a href="/">
                                <img className="footer-logo" style={{ margin: "0.5rem 0 1rem 0" }} src={logo} alt="Muse Bath" />
                            </a>
                            <p class="footer-subtitle">Elevate your bathroom to a tranquil sanctuary.</p>
                            <div className="social-logo">
                                <a href="https://www.facebook.com/musebath.us/" target="_blank" aria-label="connect us on facebook" >
                                    <img src={fbLogo} alt="musebath facebook" />
                                </a>
                                <img src={instaLogo} alt="musebath instagram" />
                            </div>

                        </div>
                        <div className="footer-area2">
                            <p class="footer-title">Quick Menu</p>

                            <a href="\" style={{ textDecoration: "none" }}>
                                <p class="footer-subtitle" >Home</p>
                            </a>

                            <a href="\" style={{ textDecoration: "none" }} onClick={() => { handleLinkClick(); scrollToSection('services') }}>
                                <p class="footer-subtitle">Service</p>
                            </a>

                            <a href="\projects" style={{ textDecoration: "none" }}>
                                <p class="footer-subtitle">Projects</p>
                            </a>

                            <a href="\blog" style={{ textDecoration: "none" }}>
                                <p class="footer-subtitle">Blog</p>
                            </a>

                        </div>
                    </Col>
                    <Col className='footer-gap' xs={1}></Col>
                    <Col className="footer-col2" xs={5}>
                        <div className="footer-area3">
                            <p class="footer-title">Schedule Your Estimation</p>
                            <p class="footer-subtitle">Call us:<br></br>3144082708</p>
                            <p class="footer-subtitle">Mail us:<br></br>westestate@yahoo.com</p>
                        </div>
                        {/* <div className="footer-area4">
                            <p class="footer-title">Our Address</p>
                            <p class="footer-subtitle">7477 wise avenue<br></br>Richmond heights MO 63117</p>
                        </div> */}

                    </Col>
                </Row>

                <img className="footer-line" src={footerLine} alt="Muse Bath footer line" ></img>
                <div className="copyright-area">
                    <p>Copyright ©MUSE BATH 2023  All rights reserved</p>
                </div>
            </Container>

        </div>

    );
};
export default FooterArea;