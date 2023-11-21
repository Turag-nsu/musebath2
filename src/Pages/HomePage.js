import React, { useEffect } from 'react';
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

import {handleGetProjects} from '../services/projectServices';
import { useState } from 'react';

const HomePage=()=> {
  const [images, setImages] = useState([]);
  const getImages = async () => {
    const { data } = await handleGetProjects();
    const imagesArray = data.map((item) => item.images.map((image) => image.img)).flat();
    setImages(imagesArray);

    const shuffleImages = (array) => {
      return new Promise((resolve) => {
        let currentIndex = array.length,
          temporaryValue,
          randomIndex;

        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }

        resolve(array);
      });
    };

    const shuffledArray = await shuffleImages(imagesArray);
    setImages(shuffledArray);
    // console.log(shuffledArray);
  };

  useEffect(() => {
    getImages();
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
