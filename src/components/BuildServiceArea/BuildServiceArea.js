import React from 'react';
import './BuildServiceArea.css';
import buildLogo from '../../Images/Service/build-area-logo.png';
import CustomButton from '../CustomButton/CustomButton';
import { Container, Row, Col } from 'react-bootstrap';

const BuildServiceArea = ({ img }) => {
    return (

        <div
            data-aos="zoom-in"
            data-aos-delay={200}
            data-aos-duration="1000"
            data-aos-ofset="200"
            data-aos-anchor-placement="top-center"
            className='build-area-container'
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className='build-area-overlay'></div>
            <Container>
                <div className='build-area'>
                    <Row>

                        <Col md={5}>
                            <div
                            data-aos="fade-right"
                            data-aos-delay={200}
                            data-aos-duration="1000"
                            data-aos-ofset="200"
                            data-aos-anchor-placement="top-center"
                            className='build-area-logo'>
                                <img src={buildLogo} alt="" />
                                {/* <img src={img} alt="" /> */}
                            </div>
                        </Col>

                        <Col md={7}>
                            <div
                            data-aos="fade-left"
                            data-aos-delay={200}
                            data-aos-duration="1000"
                            data-aos-ofset="200"
                            data-aos-anchor-placement="top-center"
                            className='build-area-text-btn'>
                                <div className='build-area-text'>
                                    <div className='build-area-text-title'>
                                        <p>Design Build services</p>
                                    </div>
                                    <div className='build-area-text-body'>
                                        <p>A design-build company is a better option than a general contracting firm or a designer to handle your remodeling project. It makes it easier and more manageable. Muse Bath is a design-build firm that combines both the builder and designer roles. We can make remodeling your commercial or residential space simple.</p>
                                    </div>
                                </div>
                                <div className='build-area-btn'>
                                    <CustomButton text='Get Started' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default BuildServiceArea;
