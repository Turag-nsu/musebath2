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
import BuildServiceArea from '../components/BuildServiceArea/BuildServiceArea';
import buildImage from '../Images/Service/service-1-build-service.jpeg'
import ServiceTestimonial from '../components/ServiceTestimonial/ServiceTestimonial';
import reviewer1 from '../Images/profile-1.png'
import { useParams } from 'react-router-dom';
import data from '../Database/Data';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
const images = [pic1, pic2, pic3, pic4, pic5];


const ServicePage = () => {
  // console.log(data);
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  const params = useParams();
  const serviceID = params.serviceID;
  if(serviceID >3 || serviceID <1){
    return(
      <Container>
        <div className='not-found-area'>
        
        <p>404<br></br>Link not found</p>
      </div>
      </Container>
    )
  }
  // console.log(data[0]);
  const service = data[0][`service${serviceID}`];
  // console.log(serviceID);
  // console.log(service);

  return (
    <div>
      <BlogHeroPart
        bg={service.hero.image}
        text={service.hero.title}
      />
      <ServicePageCard1 
        image = {service.renovation.image}
        title = {service.renovation.title}
        body1 = {service.renovation.body1}
        body2 = {service.renovation.body2}
      />
      <ConsultationForm showForm={true}/>
      <GallaryArea
        images={service.gallery.images}
        title={service.gallery.title}
      />
      <BuildServiceArea img={service.buildService.image}/>
      <ServicePageComplementary 
        title={service.complementaryService.title}
        body1={service.complementaryService.body1}
        body2={service.complementaryService.body2}
        image={service.complementaryService.image}
      />
      <ServiceTestimonial/>
      <TrustedArea />
    </div>
  );
};

export default ServicePage;
