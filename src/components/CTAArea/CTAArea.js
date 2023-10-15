import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './CTAArea.css';
import CustomButton from '../CustomButton/CustomButton';

const CTAArea = () => {
    return (
        <Container>
            <div className="cta-container">
                <Row>
                    <div className="half-area"></div>

                    <div className="half-area">
                        <div className="whole-cta-area-col2">
                            <div className='cta-area-col2'>
                                <div className="cta-area-content">
                                    <div className="cta-area-title">
                                        <p>Transform Your Bathroom Today with Muse Bath!</p>
                                    </div>
                                    <div className="cta-area-subtitle">
                                        <p>
                                            Experience Luxurious Comfort and Modern Elegance with Our Expert Remodeling Services.
                                        </p>
                                    </div>
                                    <div className="cta-area-button">
                                        <CustomButton text="Get Free Consultation" color='white' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </div>
        </Container>
    );
};

export default CTAArea;
