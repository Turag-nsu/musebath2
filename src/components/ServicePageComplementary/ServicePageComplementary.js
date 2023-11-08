import React from 'react';
import './ServicePageComplementary.css';
import { Container, Row, Col } from 'react-bootstrap';
const ServicePageComplementary = ({title, body1, body2, image}) => {
    return (
        <div className='Service-page-complementary'>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="complementary-body">
                            <div className="complementary-subtitle">
                                <p>Claim your complimentary</p>
                            </div>
                            <div className="complementary-title">
                                <p>{title}</p>
                            </div>
                            <div className="complementary-txt">
                                <p>{body1}</p>
                                <p>{body2}</p>
                            </div>
                            <button className="complementary-btn">COST VS VALUE</button>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="complementary-pic-container">
                            <img src={image} alt="" />
                        </div>
                        <button className="complementary-btn2">
                            <a href='https://www.remodeling.hw.net/cost-vs-value/2023/' target='_blank' rel="noreferrer">

                            
                            COST VS VALUE</a></button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServicePageComplementary;