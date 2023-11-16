import React from 'react';
import './TrustedArea.css';
import trustLogo1 from '../../Images/trust-logo-1.png';
import trustLogo2 from '../../Images/trust-logo-2.png';
import trustLogo3 from '../../Images/trust-logo-3.png';
import trustLogo4 from '../../Images/trust-logo-4.png';
import trustLogo5 from '../../Images/trust-logo-5.png';
import { Container } from 'react-bootstrap';

const TrustedArea = () => {

    return (
        <Container>
        <div className="trusted-area">
            
                <p className='trusted-area-title'
                data-aos="zoom-in"
                data-aos-delay={200}
                data-aos-duration="1000"
                data-aos-ofset="200"
                anchor-placement="top-center"
                >
                    The Bathroom Remodeler Trusted by the Entire Nation
                </p>
                <div className="logo-area">
                    <div className="trusted-area-logos">
                        <div className="trust-single-logo" 
                            data-aos="zoom-in"
                            data-aos-delay={200}
                            data-aos-duration="1000"
                            data-aos-ofset="200"
                            anchor-placement="top-center"
                        >
                            <img src={trustLogo1} alt="" />
                        </div>
                        <div 
                        data-aos="zoom-in"
                        data-aos-delay={300}
                        data-aos-duration="1000"
                        data-aos-ofset="200"
                        anchor-placement="top-center"
                        className="trust-single-logo">
                            <img src={trustLogo2} alt="" />
                        </div>
                        <div
                        data-aos="zoom-in"
                        data-aos-delay={400}
                        data-aos-duration="1000"
                        data-aos-ofset="200"
                        anchor-placement="top-center"
                        className="trust-single-logo">
                            <img src={trustLogo3} alt="" />
                        </div>
                        <div 
                        data-aos="zoom-in"
                        data-aos-delay={300}
                        data-aos-duration="1000"
                        data-aos-ofset="200"
                        anchor-placement="top-center"
                        className="trust-single-logo">
                            <img src={trustLogo4} alt="" />
                        </div>
                        <div
                        data-aos="zoom-in"
                        data-aos-delay={200}
                        data-aos-duration="1000"
                        data-aos-ofset="200"
                        anchor-placement="top-center"
                        className="trust-single-logo">
                            <img src={trustLogo5} alt="" />
                        </div>
                    </div>
                </div>
            
        </div>
        </Container>
    );
};

export default TrustedArea;