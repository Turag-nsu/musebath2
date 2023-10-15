import React from 'react';
import './TestimonialAreaCard.css'
import stars from '../../Images/stars.svg';

import dotdot from '../../Images/dotdot.svg'

import { Row, Col, Container } from 'react-bootstrap';
const TestimonialAreaCard = ({ img, text, name, title }) => {
    return (
        <Container className='testimonial-area-card-full card'>
            <div className='testimonial-area-card-container'>
                <img style={{ width: '11rem', marginBottom: '1rem' }} src={stars} alt="" />
                <p className="testimonial-area-card-text">{text}</p>

            </div>
            <div className="reviewer-profile">
                <Row>
                    <Col xs={2}>
                        <img style={{ borderRadius: "50%", width: '3.75rem', height: '3.75rem' }} src={img} alt="" />
                    </Col>
                    <Col xs={7}>
                        <div className='reviewer-details'>
                            <p className="reviewer-name">{name}</p>
                            <p className="reviewer-title">{title}</p>
                        </div>
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={2} style={{ marginLeft: "" }}>
                        <img src={dotdot} alt="" />
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default TestimonialAreaCard;