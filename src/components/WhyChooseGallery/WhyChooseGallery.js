import React from "react";
import  "./WhyChooseGallery.css";
import whypic1 from '../../Images/About-us/about-1.jpg';
import whypic2 from '../../Images/About-us/about-2.jpg';
import whypic3 from '../../Images/About-us/about-3.jpg';
const WhyChooseGallery = () => {

    return (
        <div className='why-choose-area-2-about-pic'>
        <img src={whypic1}></img>
        <img src={whypic2}></img>
        <img src={whypic3}></img>
      </div>
    );
}

export default WhyChooseGallery;