import React from 'react';
import BlogHeroPart from '../components/BlogHeroPart/BlogHeroPart';

import ServicePageCard1 from '../components/ServicePageCard1/ServicePageCard1';
import ConsultationForm from '../components/ConsultationForm/ConsultationForm';
import TrustedArea from '../components/TrustedArea/TrustedArea';

import ServicePageComplementary from '../components/ServicePageComplementary/ServicePageComplementary';
import BuildServiceArea from '../components/BuildServiceArea/BuildServiceArea';
import ServiceTestimonial from '../components/ServiceTestimonial/ServiceTestimonial';

import { useParams } from 'react-router-dom';
import data from '../Database/Data';
import { useEffect } from 'react';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import { Helmet } from 'react-helmet';

const ServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const params = useParams();
  const serviceTitle = params.serviceTitle;
  if (serviceTitle !== 'full-bathroom-remodeling' && serviceTitle !== 'bathtub-shower-conversions' && serviceTitle !== 'senior-friendly-bathroom') {

    return (
      <ErrorPage text="Service not found" />
    )
  }
  const findService = () => {
    const { service1, service2, service3 } = data[0];
    if ("full-bathroom-remodeling" === serviceTitle) return service1
    else if ("bathtub-shower-conversions" === serviceTitle) return service2
    else if ("senior-friendly-bathroom" === serviceTitle) return service3
    else return null
  }
  const service = findService();
  if (!service) {
    return (
      <ErrorPage text="Service not found" />
    )
  }
  const metaLink = `https://musebath.com/services/${serviceTitle}`;
  const allDescription = service.renovation.body1 + service.renovation.body2 + service.complementaryService.body1 + service.complementaryService.body2;
  const metaDescription = allDescription.slice(0, 320);
  return (
    <div>
      <Helmet>
        <link rel="canonical" href={metaLink} />
        <title>{service.hero.title} | Muse Bathrooms</title>
        <meta name="description" content={metaDescription} />
        <meta name='url' content={metaLink} />
        <meta name='identifier-URL' content={metaLink} />
        <meta property="og:title" content={service.hero.title} />
        <meta property="og:description" content={metaDescription} />
        {/* <meta property="og:image" content={service.hero.image} /> */}
        <meta property="og:url" content={metaLink} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Musebath" />

      </Helmet>
      <BlogHeroPart
        bg={service.hero.image}
        text={service.hero.title}
      />
      <ServicePageCard1
        image={service.renovation.image}
        title={service.renovation.title}
        body1={service.renovation.body1}
        body2={service.renovation.body2}
      />
      <ConsultationForm showForm={true} />

      <BuildServiceArea img={service.buildService.image} />
      <ServicePageComplementary
        title={service.complementaryService.title}
        body1={service.complementaryService.body1}
        body2={service.complementaryService.body2}
        image={service.complementaryService.image}
      />
      <ServiceTestimonial />
      <TrustedArea />
    </div>
  );
};

export default ServicePage;
