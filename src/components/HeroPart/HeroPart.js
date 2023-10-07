import React from 'react';
import './HeroPart.css';
// import bgImage from '../../Images/hero-bg.png';
import CustomButton from '../CustomButton/CustomButton';
import CustomTextInput from '../CustomTextInput/CustomTextInput';
const HeroPart = () => {
    return (
        <div className="hero-part">
            <div className="container2" data-aos="zoom-in">
                <p className="hero-text" >The future of your bathroom is here</p>
                <p className="hero-text2">Elegant and incredible comfort</p>
                <CustomButton text="GET A FREE ESTIMATE NOW" />
            </div>
            {/* <div data-aos="fade-right"> */}
                <CustomTextInput />
            {/* </div> */}
            
        </div>
    );
};

export default HeroPart;