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
        <div className="trusted-area">
            <Container>
                <p className='trusted-area-title'>
                    The Bathroom Remodeler Trusted by the Entire Nation
                </p>
                <div className="logo-area">
                    <div className="trusted-area-logos">
                        <div className="trust-single-logo">
                            <img src={trustLogo1} alt="" />
                        </div>
                        <div className="trust-single-logo">
                            <img src={trustLogo2} alt="" />
                        </div>
                        <div className="trust-single-logo">
                            <img src={trustLogo3} alt="" />
                        </div>
                        <div className="trust-single-logo">
                            <img src={trustLogo4} alt="" />
                        </div>
                        <div className="trust-single-logo">
                            <img src={trustLogo5} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TrustedArea;