import React from 'react';
import './TestimonialAreaCard.css'
import stars from '../../Images/stars.svg';
import dotdot from '../../Images/dotdot.svg'

const TestimonialAreaCard = ({ img, text, name, title }) => {
    return (
        <div className='testimonial-area-card-full'
            data-aos="zoom-in"
            data-aos-delay={200}
            data-aos-duration="1000"
            data-aos-ofset="200"
        >
            <div className='testimonial-area-card-container'>
                <img style={{ width: '11rem', marginBottom: '1rem' }} src={stars} alt="musebath review star" />
                <article>
                    <p className="testimonial-area-card-text">{text}</p>
                </article>


            </div>
            <div className="reviewer-profile">
                <div className='pic-name-title'>
                    <div className="reviewer-img">
                        <img src={img} alt="musebath reviewer" />
                    </div>
                    <div className='reviewer-details'>
                        <p className="reviewer-name">{name}</p>
                        <p className="reviewer-title">{title}</p>
                    </div>
                </div>
                {/* <Col xs={1}>.</Col> */}
                <div className='dotdot-area'>
                    <div >
                        <img src={dotdot} alt="musebath review" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TestimonialAreaCard;