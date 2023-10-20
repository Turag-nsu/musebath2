import React from 'react';
import './ServicePageCard1.css'
import serviceCardPic1 from '../../Images/service-area-1-pic-1'
import { Container } from 'react-bootstrap';
const ServicePageCard1 = () => {
    return (
        <div className='service-page-card-1'>
            <Container>
                <div className='service-page-card-1-container'>
                    <div className="service-page-card-1-pic-container">
                        <img src={serviceCardPic1} alt="Service Card Pic 1" />
                    </div>
                    <div className="service-page-card-1-text-container">
                        <div className="service-page-card-1-title">
                            <p>Simplified Full Bathroom Renovation</p>
                        </div>
                        <div className="service-page-card-1-txt">
                            <p>In the hottest housing market, investing in a kitchen or bathroom remodel is a great investment that often returns more than 100% of the cost.</p>
                        </div>
                        <div className="service-page-card-1-txt">
                            <p>Muse Bath will give you a complete bathroom renovation without any headaches. We don't cover up or hide issues. We use our exclusive complete bath remodel to remove old materials and fixtures, and replace them with beautiful options.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ServicePageCard1;