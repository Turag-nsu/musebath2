import React from 'react';
import './ServiceTestimonial.css';
import star from '../../Images/stars.svg'
import { Button, Container } from 'react-bootstrap';
import nextbtn from '../../Images/arrow.svg'
import prevbtn from '../../Images/Service/previous-arrow.svg'
const ServiceTestimonial = ({ img, name, title }) => {
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
                            <p className="service-testimonial-area-card-text">Muse Bath has truly redefined my bathing experience with their exceptional products. From their exquisite selection of bath salts to their soothing aromatherapy mists, every product is a testament to their commitment to quality and relaxation. The carefully curated ingredients and captivating scents transform my daily bath routine into a luxurious and rejuvenating ritual. Muse Bath's attention to detail and dedication to creating a serene atmosphere make them my go-to choice for elevating self-care moments.</p>
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
