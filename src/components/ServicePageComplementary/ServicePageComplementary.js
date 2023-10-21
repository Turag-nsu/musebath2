import React from 'react';
import './ServicePageComplementary.css';
import { Container, Row, Col } from 'react-bootstrap';
import pic from '../../Images/Service/service-1-complementary-pic.jpeg'
const ServicePageComplementary = () => {
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
                                <p>Full Bathroom Remodeling</p>
                            </div>
                            <div className="complementary-txt">
                                <p>The most expensive bathroom remodeling option is a fully customized bathroom. Custom Bathroom Remodels go beyond the standard pull-and-replace renovation. If you are planning to add an addition to your home or completely redesign the bathroom, then it is considered a custom remodel. A custom bathroom remodel will likely include removing and relocating the tub, shower and toilet. This is especially true in larger bathrooms to enhance the functionality. Construction planning is required to determine where the new plumbing will run, the layout of the floor joists, the way the electrical work will be completed and which walls carry the load. These are all important factors to consider from the beginning because they could add to the price of the bathroom. You should also remodel your bathroom to make it work best for you.</p>
                            </div>
                            <button className="complementary-btn">COST VS VALUE</button>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="complementary-pic-container">
                            <img src={pic} alt="" />
                        </div>
                        <button className="complementary-btn2">COST VS VALUE</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServicePageComplementary;