import React from 'react';
import './TestimonialAreaCard.css'
import stars from '../../Images/stars.svg';

import dotdot from '../../Images/dotdot.svg'

import { Row, Col } from 'react-bootstrap';
const TestimonialAreaCard = ({img, text, name, title}) => {
    return (
        <div>
            <img style={{ margin: "2rem 0 2rem 0" }} src={stars} alt="" />
            <p className="testimonial-area-card-text">{text}</p>
            <div className="reviewer-profile">
                <Row>
                    <Col xs={2}>
                        <img src={img} alt="" />
                    </Col>
                    <Col  xs={7}>
                        <div className='reviewer-details'>
                            <p className="reviewer-name">{name}</p>
                            <p className="reviewer-title">{title}</p>
                        </div>
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={2} style={{marginLeft: "-2rem"}}>
                        <img src={dotdot} alt="" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default TestimonialAreaCard;