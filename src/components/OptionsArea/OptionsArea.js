import React from 'react';
import './OptionsArea.css'
import optionAreaImg from '../../Images/optionAreaImg.png';
import CustomButton from '../CustomButton/CustomButton';
import { Container } from 'react-bootstrap';
const OptionsArea = () => {
    return (
        <div className='option-area'  >
            <Container>
            <p className="option-area-title" data-aos="zoom-in">
                Need bathroom upgrade?
            </p>
            <p className="option-area-subtitle">
                Welcome to the right place for a fresh change.
            </p>
            <div className="option-are-img mx-auto" data-aos="zoom-in-down">
                <img src={optionAreaImg} alt="" />
            </div>
            <p className="option-area-title2">Effortless, Cost-Effective Total Bathroom Transformation.</p>
            <p className="option-area-subtitle2 mx-auto">Whether you're seeking a contemporary revitalization, increased storage capacity, enhanced safety features, or all of these aspects combined, our team of comprehensive bathroom remodeling experts is committed to bringing your dream bathroom to life effortlessly. We prioritize delivering the desired style within your designated budget and ensure that functionality seamlessly complements the beauty of the design, eliminating any hassle</p>
            <div className="option-area-button mx-auto">
            <CustomButton text="Contact Us Now"  />
            </div>
            </Container>
        </div>
    );
};

export default OptionsArea;