import React from 'react';
import './ServicePageCard1.css'
import serviceCardPic1 from '../../Images/service-area-1-pic-1'
import { Container } from 'react-bootstrap';
const ServicePageCard1 = ({image, title, body1, body2}) => {
    return (
        <div className='service-page-card-1' style={{position:"relative", zIndex:"-1"}}>
            <Container>
                <div className='service-page-card-1-container'>
                    <div className="service-page-card-1-pic-container">
                        <img src={image} alt="Service Card Pic 1" />
                    </div>
                    <div className="service-page-card-1-text-container">
                        <div className="service-page-card-1-title">
                            <p>{title}</p>
                        </div>
                        <div className="service-page-card-1-txt">
                            <p>{body1}</p>
                        </div>
                        <div className="service-page-card-1-txt">
                            <p>{body2}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ServicePageCard1;