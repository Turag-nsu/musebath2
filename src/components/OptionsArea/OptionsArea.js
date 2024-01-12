import React from 'react';
import './OptionsArea.css'
import optionAreaImg from '../../Images/optionareaimg.webp';
import CustomButton from '../CustomButton/CustomButton';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const OptionsArea = () => {
    return (
        <div className='option-area'  >
            <Container>
                <article>
                    <h1 className="option-area-title" data-aos="zoom-in" data-aos-offset="100" data-aos-duration="500" data-aos-delay="200">
                        Need bathroom upgrade?
                    </h1>
                    <h3 className="option-area-subtitle" fata-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-delay="200">
                        Welcome to the right place for a fresh change.
                    </h3>
                    <div className="option-are-img mx-auto" data-aos="zoom-in-down" data-aos-offset="100" data-aos-duration="1000" data-aos-delay="200">
                        <img src={optionAreaImg} alt="" />
                    </div>
                    <h2 className="option-area-title2" data-aos="zoom-in" data-aos-offset="100" data-aos-duration="500" data-aos-delay="200">Effortless, Cost-Effective Total Bathroom Transformation.</h2>
                    <p className="option-area-subtitle2 mx-auto" data-aos="zoom-in" data-aos-offset="100" data-aos-duration="500" data-aos-delay="200">Whether you're seeking a contemporary revitalization, increased storage capacity, enhanced safety features, or all of these aspects combined, our team of comprehensive bathroom remodeling experts is committed to bringing your dream bathroom to life effortlessly. We prioritize delivering the desired style within your designated budget and ensure that functionality seamlessly complements the beauty of the design, eliminating any hassle</p>

                </article>
                <div className="option-area-button mx-auto" data-aos="zoom-in" data-aos-offset="100" data-aos-duration="500" data-aos-delay="200">
                    <Link to="/contact-us"><CustomButton text="Contact Us Now" /></Link>
                </div>
            </Container>
        </div>
    );
};

export default OptionsArea;