import React from 'react';
import './HeroPart.css';
// import bgImage from '../../Images/hero-bg.png';
import CustomButton from '../CustomButton/CustomButton';
import CustomTextInput from '../CustomTextInput/CustomTextInput';
import { useLocation } from 'react-router-dom';
const HeroPart = () => {
    const location = useLocation();
    const { pathname } = location;
    const showInputArea = pathname === '/';
    return (
        <div className="hero-part">
            <div className="container2" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" >
                <p className="hero-text" >Elevate your bathroom to a tranquil sanctuary.</p>
                <p className="hero-text2">Your Destination for Bathroom Renovation, Style, and Aesthetics</p>
                <CustomButton text="GET A FREE ESTIMATE NOW" />
            </div>
            {/* <div data-aos="fade-right"> */}
                {showInputArea&&<CustomTextInput />}
            {/* </div> */}
            {!showInputArea&&<div className="hero-padding">.</div>}
        </div>
    );
};

export default HeroPart;