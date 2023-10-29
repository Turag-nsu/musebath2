import React from 'react';
import './SingleProjectPage.css';
import { Container, Row, Col } from 'react-bootstrap';
import ContactUsForm from '../../../components/ContactUsForm/ContactUsForm';
import ImageSlider from '../../../components/ImageSlider/ImageSlider';
import ConsultationForm from '../../../components/ConsultationForm/ConsultationForm';
import TrustedArea from '../../../components/TrustedArea/TrustedArea';
const SingleProjectPage = ({ project }) => {
    console.log(project.description);
    return (
        <div style={{ overflow: 'hidden' }}>
            <ImageSlider />
            <Container>
                <Row>
                    <Col md={8}>
                        <div className='single-projext-page-details-container'>
                            <div className="single-projext-page-details-title">
                                <p>Project Description</p>
                            </div>
                            <div className="single-projext-page-details-body">
                                {
                                    project.description.map((item, index) => {
                                        return (
                                            <p key={index}>{item.text}</p>
                                        )
                                    }
                                    )
                                }
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <ContactUsForm />
                    </Col>
                </Row>
            </Container>
            <div style={{ backgroundColor: "#fff", marginTop: "7.5rem"}}>
                <Container><ConsultationForm showForm={true} /></Container>
            </div>


            <Container><TrustedArea /></Container>
        </div>
    );
};

export default SingleProjectPage;