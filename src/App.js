import React from 'react';
import './App.css';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import HeroPart from './components/HeroPart/HeroPart';
import WhyChoosePart from './components/WhyChoosePart/WhyChoosePart';
import ServiceArea from './components/ServiceArea/ServiceArea';
import OptionsArea from './components/OptionsArea/OptionsArea';
import WorkArea from './components/WorkArea/WorkArea';
import GallaryArea from './components/GallaryArea/GallaryArea';
import ServiceArea2 from './components/ServiceArea2/ServiceArea2';
import TestimonialArea from './components/TestimonialArea/TestimonialArea';
import ArticleArea from './components/ArticleArea/ArticleArea';
import TrustedArea from './components/TrustedArea/TrustedArea';
import CTAArea from './components/CTAArea/CTAArea';
import FooterArea from './components/FooterArea/FooterArea';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <div style={{ backgroundColor: '#F8F9FA' }}>
        <HeroPart />
      </div>
      <div style={{ backgroundColor: '#F8F9FA' }}>
        <WhyChoosePart />
      </div>
      <div style={{ backgroundColor: '#FFF' }}>
        <ServiceArea />
      </div>
      <div style={{ backgroundColor: '#F8F9FA' }}>
        <OptionsArea />
      </div>
      <div style={{ backgroundColor: '#FFF' }}>
        <WorkArea />
      </div>
      <div style={{ backgroundColor: '#F8F9FA' }}>
        <GallaryArea />
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
      <FooterArea />
    </div>
  );
}

export default App;
