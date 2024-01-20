import React from 'react';
import './HeroPart.css';
import bgImage from '../../Images/hero-area-bg.webp';
import CustomButton from '../CustomButton/CustomButton';
import CustomTextInput from '../CustomTextInput/CustomTextInput';
import { useLocation } from 'react-router-dom';

const HeroPart = () => {
    const location = useLocation();
    const { pathname } = location;
    const showInputArea = pathname === '/';
    //after 3 seconds, load background image
    const heroPartElement = document.querySelector('.hero-part');
    if (heroPartElement) {
        heroPartElement.style.filter = "blur(50%)";
    }

    setTimeout(() => {
        const bgImg = new Image();
        bgImg.src = bgImage;
        bgImg.onload = () => {
            if (heroPartElement) {
                // Remove blur and add transition
                heroPartElement.style.backgroundImage = `url(${bgImg.src})`;
                heroPartElement.style.filter = "blur(0%)";
                heroPartElement.style.transition = "filter 1s ease"; // Add transition
            }
        };
    }, 1000);


    return (
        <div className="hero-part">
            <div className="container2" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" >
                <p className="hero-text" >Elevate your bathroom to a tranquil sanctuary.</p>
                <p className="hero-text2">Your Destination for Bathroom Renovation, Style, and Aesthetics</p>
                <CustomButton text="GET A FREE ESTIMATE NOW" />
            </div>
            {/* <div data-aos="fade-right"> */}
            {showInputArea && <CustomTextInput />}
            {/* </div> */}
            {!showInputArea && <div className="hero-padding">.</div>}
        </div>
    );
};

export default HeroPart;