import React from 'react';
import './ServiceArea.css';
import service1 from '../../Images/service-1.png';
import service2 from '../../Images/service-2.jpeg';
import service3 from '../../Images/service-3.jpeg';
import Card2 from '../Card2/Card2';
import CustomButton from '../CustomButton/CustomButton';

const servicesData = [
    {
        id: 1,
        imgLink: service1,
        title: "Bathroom Remodeling",
        body: "We offer a wide range of bathroom remodeling services to fit your needs. Whether you’re looking for a complete bathroom remodel or just need to make a few updates, we’ve got you covered."
    },
    {
        id: 2,
        imgLink: service2,
        title: "Bathroom Renovation",
        body: "We offer a wide range of bathroom remodeling services to fit your needs. Whether you’re looking for a complete bathroom remodel or just need to make a few updates, we’ve got you covered."
    },
    {
        id: 3,
        imgLink: service3,
        title: "Bathroom Renovation",
        body: "We offer a wide range of bathroom remodeling services to fit your needs. Whether you’re looking for a complete bathroom remodel or just need to make a few updates, we’ve got you covered."
    }
]
const ServiceArea = () => {
    return (
        <div className="service-area container">
            <div className="service-title-area" data-aos="zoom-in-down">
                <p className="service-title-text">services We Provide</p>
                <CustomButton text="Free Consultation" className="service-button" />
            </div>

            <div className="service-cards-area">
                {servicesData.map((service) => (
                    <Card2 key={service.id} imgLink={service.imgLink} title={service.title} body={service.body} id={service.id} />
                ))}
            </div>

        </div>

    );
};

export default ServiceArea;