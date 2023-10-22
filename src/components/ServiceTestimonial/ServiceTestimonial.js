import React from 'react';
import './ServiceTestimonial.css';
import star from '../../Images/stars.svg'
import { Button, Container } from 'react-bootstrap';
import nextbtn from '../../Images/arrow.svg'
import prevbtn from '../../Images/Service/previous-arrow.svg'
const ServiceTestimonial = ({ img, name, title, text }) => {
    return (
        <div className='service-container'>
            <Container>
                <div className='service-testimonial-area'>
                    <div className='service-testimonial-area-title'>
                        <p>Testimonials from Our Valued Clients</p>
                    </div>
                    <div className='service-testimonial-area-card'>
                        <div className='service-testimonial-area-card-container'>
                            <img style={{ width: '11rem', marginBottom: '1rem' }} src={star} alt="" />
                            <p className="service-testimonial-area-card-text">{text}</p>
                        </div>
                        <div className="service-reviewer-profile">
                            <div className="service-reviewer-img">
                                <img src={img} alt="" />
                            </div>
                            <div className='service-reviewer-details'>
                                <p className="service-reviewer-name">{name}</p>
                                <p className="service-reviewer-title">{title}</p>
                            </div>
                        </div>
                    </div>
                    <div className='service-testimonial-next-btn'>
                        <button>
                            <img src={nextbtn} alt="" />
                        </button>
                    </div>
                    <div className='service-testimonial-previous-btn'>
                        <button>
                            <img src={prevbtn} alt="" />
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ServiceTestimonial;
