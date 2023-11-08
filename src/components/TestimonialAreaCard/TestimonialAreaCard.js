import React from 'react';
import './TestimonialAreaCard.css'
import stars from '../../Images/stars.svg';
import dotdot from '../../Images/dotdot.svg'

const TestimonialAreaCard = ({ img, text, name, title }) => {
    return (
        <div className='testimonial-area-card-full'>
            <div className='testimonial-area-card-container'>
                <img style={{ width: '11rem', marginBottom: '1rem' }} src={stars} alt="" />
                <p className="testimonial-area-card-text">{text}</p>

            </div>
            <div className="reviewer-profile">
                <div className='pic-name-title'>
                    <div className="reviewer-img">
                        <img src={img} alt="" />
                    </div>
                    <div className='reviewer-details'>
                        <p className="reviewer-name">{name}</p>
                        <p className="reviewer-title">{title}</p>
                    </div>
                </div>
                {/* <Col xs={1}>.</Col> */}
                <div className='dotdot-area'>
                    <div >
                        <img src={dotdot} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TestimonialAreaCard;