import React from 'react';
import './ServiceArea.css';
import service1 from '../../Images/service-1.jpeg';
import service2 from '../../Images/service-2.jpeg';
import service3 from '../../Images/service-3.jpeg';
import Card2 from '../Card2/Card2';
import CustomButton from '../CustomButton/CustomButton';
import { Row, Col, Container } from 'react-bootstrap';
const servicesData = [
    {
        id: 1,
        imgLink: service1,
        title: "Full bathroom remodeling",
        body: "For a modern and refreshed bathroom, our expert team specializes in remodeling. Whether you need more storage, improved safety, or a blend of upgrades, we bring your vision to life hassle-free. We deliver your desired look while ensuring it fits your budget perfectly."
    },
    {
        id: 2,
        imgLink: service2,
        title: "Bathtub-shower conversions",
        body: "Are you prepared to transform your bathroom with a stunning renovation? Whether you're seeking a modern, sleek overhaul or a cozy, rustic retreat, Muse Bath is fully equipped to actualize your vision for a dream bathroom through bathtub-shower conversions."
    },
    {
        id: 3,
        imgLink: service3,
        title: "Senior friendly bathroom",
        body: "Turn your potentially hazardous bathroom into a secure and inviting haven with Muse Bath's innovative aging and accessibility solutions. Our offerings include slip-resistant technology, seamless safety features, and stylish low-threshold showers and walk-in tubs. "
    }
]
const ServiceArea = () => {
    return (
        <Container>
            <div className="service-area-container">
                <div className="service-title-area" data-aos="zoom-in-down">
                    <p className="service-title-text">services We Provide</p>
                    <CustomButton text="Free Consultation" className="service-button" />
                </div>

                <div className="service-cards-area">
                    <Row xs={1} md={1} lg={3}>
                        {servicesData.map((service) => (
                            <Col><Card2 key={service.id} imgLink={service.imgLink} title={service.title} body={service.body} id={service.id} /></Col>
                        ))}
                    </Row>
                </div>

            </div>
        </Container>

    );
};

export default ServiceArea;