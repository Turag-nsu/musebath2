import React from 'react';
import './GallaryArea.css';

import { Container, Row, Col } from 'react-bootstrap';

import CustomButton from '../CustomButton/CustomButton';
import { Link } from 'react-router-dom';

const GallaryArea = ({ images, title }) => {
    return (
        <div className='gallary-area' >
            <Container>
                <p className='gallary-area-title'>
                    {title}
                </p>
                <Row xs={1} md={3}>
                    <Col md={3} >
                        <div className='gallary-pic-container' 
                        data-aos="flip-left"
                        data-aos-delay={200 + 0 * 100}
                        >
                            <img src={images[0]} alt="" />
                        </div>

                    </Col>
                    <Col md={5}>
                        <div 
                        data-aos="flip-left"
                        data-aos-delay={200 + 1 * 100}
                        className='gallary-pic-container'>
                            <img src={images[1]} alt="" />
                        </div>

                    </Col>
                    <Col md={4}>
                        <div 
                        data-aos="flip-left"
                        data-aos-delay={200 + 2 * 100}
                        className='gallary-pic-container'>
                            <img src={images[2]} alt="" />
                        </div>

                    </Col>
                </Row>
                <Row xs={1} md={2}>
                    <Col md={6}>
                        <div 
                        data-aos="flip-left"
                        data-aos-delay={200 + 3 * 100}
                        className='gallary-pic-container'>
                            <img src={images[3]} alt="" />
                        </div>

                    </Col>
                    <Col md={6}>
                        <div
                        data-aos="flip-left"
                        data-aos-delay={200 + 4 * 100}
                        className='gallary-pic-container'>
                            <img src={images[4]} alt="" />
                        </div>

                    </Col>
                </Row>
                <div className="gallary-btn">
                    <Link to='/projects'><CustomButton text="View All Projects" /></Link>
                </div>
            </Container>

        </div>
    );
};

export default GallaryArea;