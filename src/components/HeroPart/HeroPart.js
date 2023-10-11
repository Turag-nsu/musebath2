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
            <div className="container2" data-aos="zoom-in" >
                <p className="hero-text" >The future of your bathroom is here</p>
                <p className="hero-text2">Elegant and incredible comfort</p>
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