import React, { useEffect } from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import HeroPart from '../components/HeroPart/HeroPart';
import WhyChoosePart from '../components/WhyChoosePart/WhyChoosePart';
import ServiceArea from '../components/ServiceArea/ServiceArea';
import OptionsArea from '../components/OptionsArea/OptionsArea';
import WorkArea from '../components/WorkArea/WorkArea';
import GallaryArea from '../components/GallaryArea/GallaryArea';
import ServiceArea2 from '../components/ServiceArea2/ServiceArea2';
import TestimonialArea from '../components/TestimonialArea/TestimonialArea';
import ArticleArea from '../components/ArticleArea/ArticleArea';
import TrustedArea from '../components/TrustedArea/TrustedArea';
import CTAArea from '../components/CTAArea/CTAArea';
import gallaryPic1 from '../Images/Gallery-pic-1.png';
import gallaryPic2 from '../Images/Gallery-pic-2.png';
import gallaryPic3 from '../Images/Gallery-pic-3.png';
import gallaryPic4 from '../Images/Gallery-pic-4.png';
import gallaryPic5 from '../Images/Gallery-pic-5.png';
const images = [gallaryPic1, gallaryPic2, gallaryPic3, gallaryPic4, gallaryPic5];
const HomePage=()=> {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* <CustomNavbar /> */}
       <div style={{ backgroundColor: '#F8F9FA' }}>
        <HeroPart />
      </div>
      
      <div style={{ backgroundColor: '#F8F9FA' }}>
        <WhyChoosePart />
      </div>
      <div 
      id='services'
      style={{ backgroundColor: '#FFF' }}>
        <ServiceArea />
      </div>
      <div style={{ backgroundColor: '#F8F9FA' }}>
        <OptionsArea />
      </div>
      <div style={{ backgroundColor: '#FFF' }}>
        <WorkArea />
      </div>
      <div style={{ backgroundColor: '#F8F9FA' }}>
        <GallaryArea images={images} title="Bathroom Remodel Showcase"/>
      </div>
      <div style={{ backgroundColor: '#FFF' }}>
        <ServiceArea2 />
      </div>
      <div style={{ backgroundColor: '#F8F9FA' }}>
        <TestimonialArea />
      </div>
      <div style={{ backgroundColor: '#FFF' }}>
        <ArticleArea />
      </div>
      <div style={{ backgroundColor: '#F8F9FA' }}>
        <TrustedArea />
      </div>
      <div style={{ backgroundColor: '#FFF' }}>
        <CTAArea />
      </div>
      </div>
  );
}

export default HomePage;
