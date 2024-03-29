import React from 'react';
import './ServiceArea2.css';
import { Row, Col, Container } from 'react-bootstrap';
// import Mymap from './MyMap/Mymap';
import Mymap from '../MyMap/MyMap';
import CustomButton from '../CustomButton/CustomButton';
import SingleLocation from './SingleLocation/SingleLocation';
import { Link } from 'react-router-dom';
const serviceLocations = [
    { "id": 1, "city": "Richmond Heights, MO" },
    { "id": 2, "city": "Des Peres, MO" },
    { "id": 3, "city": "Maryland Heights, MO" },
    { "id": 4, "city": "Troy, MO" },
    { "id": 5, "city": "Brentwood, MO" },
    { "id": 6, "city": "Clayton, MO" },
    { "id": 7, "city": "Webster Groves, MO" },
    { "id": 8, "city": "Mehlville, MO" },
    { "id": 9, "city": "Saint Louis, MO" },
    { "id": 10, "city": "Lake St. Louis, MO" },
    { "id": 11, "city": "Webster Groves, MO" },
    { "id": 12, "city": "Frontenac, MO" },
    { "id": 13, "city": "St. Peters, MO" },
    { "id": 14, "city": "Oakville, MO" },
    { "id": 15, "city": "Fenton, MO" },
    { "id": 16, "city": "Creve Coeur, MO" },
    { "id": 17, "city": "Manchester, MO" },
    { "id": 18, "city": "Ladue, MO" },
    { "id": 19, "city": "Wildwood, MO" },
    { "id": 20, "city": "Arnold, MO" },
    { "id": 21, "city": "Sunset Hills, MO" },
    { "id": 22, "city": "Kirkwood, MO" },
    { "id": 23, "city": "Town and Country, MO" },
    { "id": 24, "city": "Crestwood, MO" },
    { "id": 25, "city": "Ballwin, MO" },
    { "id": 26, "city": "High Ridge, MO" },
    { "id": 27, "city": "Wentzville, MO" },
    { "id": 28, "city": "O'Fallon, MO" },
    { "id": 29, "city": "Chesterfield, MO" },
    { "id": 30, "city": "St. Charles, MO" }
]

const ServiceArea2 = () => {

    return (
        <div className='service-area-2'>
            <Container>
                <article>
                    <h1 className='Service-area-2-title'
                        data-aos="zoom-in"
                        data-aos-delay={200}
                        data-aos-duration="700"
                        data-aos-ofset="200">
                        Restyling Bathrooms Across the United States
                    </h1>
                </article>

                <Row>
                    <Col md={6} >
                        <div className='map-area'
                            data-aos="zoom-in"
                            data-aos-delay={200}
                            data-aos-duration="700"
                            data-aos-ofset="200">
                            <Mymap />
                        </div>
                    </Col>
                    <Col md={6}>
                        <p className="service-area-text"
                            data-aos="zoom-in"
                            data-aos-delay={200}
                            data-aos-duration="100"
                            data-aos-ofset="200"
                        >
                            Our professional bathroom remodeling services are designed to transform your ordinary bathroom into a luxurious oasis. With a keen eye for design and a commitment to quality.
                        </p>
                        <p className="Location-title"
                            data-aos="zoom-in"
                            data-aos-delay={200}
                            data-aos-duration="100"
                            data-aos-ofset="200"
                        >
                            We provide our services in the following cities:
                        </p>
                        <div className="service-locations">
                            <Row xs={2} md={3}>
                                {
                                    serviceLocations.map(location =>
                                        <div className="location" key={location.id} data-aos="zoom-in"
                                            data-aos-delay={200}
                                            data-aos-duration="100"
                                            data-aos-ofset="200">
                                            <Col>
                                                <SingleLocation name={location.city} />
                                            </Col>
                                        </div>
                                    )
                                }
                            </Row>
                        </div>
                    </Col>
                </Row>
                <div className="option-area-button mx-auto"
                    data-aos="zoom-in"
                    data-aos-delay={200}
                    data-aos-duration="100"
                    data-aos-ofset="200"
                >
                    <Link to="/contact-us">
                        <CustomButton text="Free Consultation" />
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default ServiceArea2;
