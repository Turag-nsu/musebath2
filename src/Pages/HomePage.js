import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
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

import { handleGetProjects } from '../services/projectServices';
import { useState } from 'react';

const HomePage = () => {
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
      <Helmet>
        <title>Musebath - Premier Bathroom Remodeling Services in Missouri</title>
        <meta data-rh="true" name="description" content="Transform your bathroom with the trusted and best bathroom remodeling services in Missouri, USA. Musebath, your local expert, brings innovative designs and top-notch craftsmanship. Redefine your space with America's premier choice. Near you, we excels in enhancing bathroom interiors, ensuring excellence in every detail" />
        <meta name="keywords" content="Bathroom Remodeling Missouri, Trusted Bathroom Renovations, Best Bathroom Interior Design, Top-Rated Remodelers in USA, Expert Bathroom Contractors, Missouri's Premier Bath Renovations, America's Trusted Bathroom Remodels, Near Me Bathroom Upgrades, Best USA Bathroom Makeovers, Musebath Excellence in Remodeling"/>

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Muse Bathrooms" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="1 days" />
        <meta name="language" content="en" />
        <meta name="url" content="https://www.musebath.us/" />
        <meta name="identifier-URL" content="https://www.musebath.us/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="sKwhJT5VSAlST2YHkJ1Stbt28IRiU5Qj1pzpbGo7Syc" />
        <meta property="og:title" content="Muse Bathrooms | Bathroom Renovations in Missouri" />
        <meta property="og:description" content="Muse Bath is a family owned and operated business that has been in the industry for over 30 years. We specialize in bathroom renovations in Missouri." />
        <meta property="og:image" content="../Images/hero-bg.png" />
        {/* <meta property="og:url" content="https://musebath.us/my-page" /> */}
        {/* <meta name="twitter:title" content="Muse Bathrooms | Bathroom Renovations in Missouri" />
        <meta name="twitter:description" content="Muse Bath is a family owned and operated business that has been in the industry for over 30 years. We specialize in bathroom renovations in Missouri." />
        <meta name="twitter:image" content="https://example.com/image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@TwitterUser" /> */}

      </Helmet>
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
        <GallaryArea images={images} title="Bathroom Remodel Showcase" />
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
