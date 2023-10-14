import React from 'react';
import './GallaryArea.css';

import { Container, Row, Col } from 'react-bootstrap';
import gallaryPic1 from '../../Images/Gallery-pic-1.png';
import gallaryPic2 from '../../Images/Gallery-pic-2.png';
import gallaryPic3 from '../../Images/Gallery-pic-3.png';
import gallaryPic4 from '../../Images/Gallery-pic-4.png';
import gallaryPic5 from '../../Images/Gallery-pic-5.png';
import CustomButton from '../CustomButton/CustomButton';

const GallaryArea = () => {
    return (
        <div className='gallary-area'>
            <Container>
                <p className='gallary-area-title'>
                    Bathroom Remodel Showcase
                </p>
                <Row className='gallary-row' xs={1} md={3}>
                    <Col className='gallary-pic-container' md={3} >
                        <div className='gallery-pic-container'>
                        <img src={gallaryPic1} alt="" />
                        </div>
                        
                    </Col>
                    <Col className='gallary-pic-container' md={5}>
                        <div className='gallery-pic-container'>
                        <img src={gallaryPic2} alt="" />
                        </div>
                        
                    </Col>
                    <Col className='gallary-pic-container' md={4}>
                        <div className='gallery-pic-container'>
                        <img src={gallaryPic3} alt="" />
                        </div>
                        
                    </Col>
                </Row>
                <Row className='gallary-row' xs={1} md={2}>
                    <Col className='gallary-pic-container' md={6}>
                        <div className='gallery-pic-container'>
                        <img src={gallaryPic4} alt="" />
                        </div>
                        
                    </Col>
                    <Col className='gallary-pic-container' md={6}>
                        <div className='gallery-pic-container'>

                        </div>
                        <img src={gallaryPic5} alt="" />
                    </Col>
                </Row>
                <div className="gallary-btn">
                    <CustomButton text="View All Projects" />
                </div>
            </Container>

        </div>
    );
};

export default GallaryArea;