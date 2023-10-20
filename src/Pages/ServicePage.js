import React from 'react';
import BlogHeroPart from '../components/BlogHeroPart/BlogHeroPart';
import serviceBg1 from '../Images/service-bg-1.jpeg'
import ServicePageCard1 from '../components/ServicePageCard1/ServicePageCard1';
import ConsultationForm from '../components/ConsultationForm/ConsultationForm';
import GallaryArea from '../components/GallaryArea/GallaryArea';
import TrustedArea from '../components/TrustedArea/TrustedArea';
import pic1 from '../Images/Service/service-1-pic-1.jpeg'
import pic2 from '../Images/Service/service-1-pic-2.jpeg'
import pic3 from '../Images/Service/service-1-pic-3.jpeg'
import pic4 from '../Images/Service/service-1-pic-4.jpeg'
import pic5 from '../Images/Service/service-1-pic-5.jpeg'
import ServicePageComplementary from '../components/ServicePageComplementary/ServicePageComplementary';

const images = [pic1, pic2, pic3, pic4, pic5];
const ServicePage = () => {
  // Your component code goes here
  return (
    <div>
      <BlogHeroPart
        bg={serviceBg1}
        text="Complete Bathroom Remodeling"
      />
      <ServicePageCard1 />
      <ConsultationForm/>
      <GallaryArea
        images={images}
        title="Complete Bathroom Remodel Showcase"
      />
      <ServicePageComplementary />
      <TrustedArea />
    </div>
  );
};

export default ServicePage;
