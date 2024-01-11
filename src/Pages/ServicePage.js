import React from 'react';
import BlogHeroPart from '../components/BlogHeroPart/BlogHeroPart';

import ServicePageCard1 from '../components/ServicePageCard1/ServicePageCard1';
import ConsultationForm from '../components/ConsultationForm/ConsultationForm';
import GallaryArea from '../components/GallaryArea/GallaryArea';
import TrustedArea from '../components/TrustedArea/TrustedArea';

import ServicePageComplementary from '../components/ServicePageComplementary/ServicePageComplementary';
import BuildServiceArea from '../components/BuildServiceArea/BuildServiceArea';
import ServiceTestimonial from '../components/ServiceTestimonial/ServiceTestimonial';

import { useParams } from 'react-router-dom';
import data from '../Database/Data';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import { Helmet } from 'react-helmet';
/**
 const data = [
    {
        service1: {
            id: 1,
            hero: {
                title: "Complete Bathroom Remodeling",
                image: serviceBg1,

            },
            renovation: {
                image: serviceCardPic1,
                title: "Simplified Full Bathroom Renovation",
                body1: "In the hottest housing market, investing in a kitchen or bathroom remodel is a great investment that often returns more than 100% of the cost.",
                body2: "Muse Bath will give you a complete bathroom renovation without any headaches. We don't cover up or hide issues. We use our exclusive complete bath remodel to remove old materials and fixtures, and replace them with beautiful options."
            },
            gallery: {
                title: "Complete Bathroom Remodel Showcase",
                images: [service1pic1, service1pic2, service1pic3, service1pic4, service1pic5]
            },
            buildService: {
                image: service1buildImage,
            },
            complementaryService: {
                title: "Full Bathroom Remodeling",
                body1: "The most expensive bathroom remodeling option is a fully customized bathroom. Custom Bathroom Remodels go beyond the standard pull-and-replace renovation. If you are planning to add an addition to your home or completely redesign the bathroom, then it is considered a custom remodel. A custom bathroom remodel will likely include removing and relocating the tub, shower and toilet. This is especially true in larger bathrooms to enhance the functionality. Construction planning is required to determine where the new plumbing will run, the layout of the floor joists, the way the electrical work will be completed and which walls carry the load. These are all important factors to consider from the beginning because they could add to the price of the bathroom. You should also remodel your bathroom to make it work best for you.",
                body2: "",
                image: service1complementarypic,
            },
            testimonial: {
                body: "Muse Bath has truly redefined my bathing experience with their exceptional products. From their exquisite selection of bath salts to their soothing aromatherapy mists, every product is a testament to their commitment to quality and relaxation. The carefully curated ingredients and captivating scents transform my daily bath routine into a luxurious and rejuvenating ritual. Muse Bath's attention to detail and dedication to creating a serene atmosphere make them my go-to choice for elevating self-care moments.",
                reviewer: {
                    name: "Theresa Webb",
                    title: "Product designer",
                    image: reviewer1,
                }
            },
        },
        service2: {
            id: 2,
            hero: {
                title: "Bathtub-shower conversions",
                image: serviceBg2,

            },
            renovation: {
                image: serviceCardPic2,
                title: "Begin on your bathroom makeover journey",
                body1: "Even after frequent cleaning, the daily usage of your bathtub or shower can lead to visible wear.",
                body2: "Muse Bath’s fast and durable tub and shower conversions can be customized to meet your needs, and will complement the appearance of your bathroom."
            },
            gallery: {
                title: "Bathtub-shower conversions Showcase",
                images: [service2pic1, service2pic2, service2pic3, service2pic4, service2pic5]
            },
            buildService: {
                image: service2buildImage,
            },
            complementaryService: {
                title: "Half bathroom Remodeling",
                body1: "Are you tired of the noticeable signs of wear and tear in your shower or tub? Perhaps you're looking to update the design of your space or add accessibility and safety features. Whatever the reason may be, the transformation from a shower to a tub or vice versa can bring a fresh new look and functionality to your bathroom.",
                body2: "If your current tub or shower has seen better days, it's time for a change. Over time, constant use and exposure to water can cause cracks, stains, and other signs of wear and tear that can make your bathroom appear outdated and uninviting. By making the switch from a tired tub or shower to its counterpart, you can instantly breathe new life into your space.",
                image: service2complementarypic,
            },
            testimonial: {
                body: "Muse Bath has truly redefined my bathing experience with their exceptional products. From their exquisite selection of bath salts to their soothing aromatherapy mists, every product is a testament to their commitment to quality and relaxation. The carefully curated ingredients and captivating scents transform my daily bath routine into a luxurious and rejuvenating ritual. Muse Bath's attention to detail and dedication to creating a serene atmosphere make them my go-to choice for elevating self-care moments.",
                reviewer: {
                    name: "Theresa Webb",
                    title: "Product designer",
                    image: reviewer2,
                }
            }
        },
        service3: {
            id: 3,
            hero: {
                title: "Senior friendly bathroom",
                image: serviceBg3,

            },
            renovation: {
                image: serviceCardPic3,
                title: "Bathroom Solutions for Aging and Accessibility",
                body1: "Creating an accessible bathroom is crucial for ensuring the comfort and safety of both elderly and disabled individuals. By making necessary modifications, we can significantly improve their quality of life and independence.",
                body2: "When designing an accessible bathroom, it is important to consider the specific needs of these individuals. Installing grab bars near the toilet and in the shower area can provide stability and support for those with limited mobility. Additionally, incorporating a raised toilet seat or a commode chair can make it easier for older or disabled individuals to use the facilities."
            },
            gallery: {
                title: "Senior friendly bathroom Showcase",
                images: [service3pic1, service3pic2, service3pic3, service3pic4, service3pic5]
            },
            buildService: {
                image: service3buildImage,
            },
            complementaryService: {
                title: "Accessible Bathroom",
                body1: "Ensuring accessibility in bathrooms is essential for the comfort and safety of both disabled and elderly individuals. By making bathrooms accessible, we can empower these individuals to maintain their independence and dignity.",
                body2: "When designing a bathroom for disabled or elderly people, it is crucial to consider their unique needs. Installing grab bars near the toilet and shower area can provide stability and support while transferring from one surface to another. Additionally, incorporating non-slip flooring materials can prevent accidents caused by slippery surfaces.",
                image: service3complementarypic,
            },
            testimonial: {
                body: "Muse Bath has truly redefined my bathing experience with their exceptional products. From their exquisite selection of bath salts to their soothing aromatherapy mists, every product is a testament to their commitment to quality and relaxation. The carefully curated ingredients and captivating scents transform my daily bath routine into a luxurious and rejuvenating ritual. Muse Bath's attention to detail and dedication to creating a serene atmosphere make them my go-to choice for elevating self-care moments.",
                reviewer: {
                    name: "Theresa Webb",
                    title: "Product designer",
                    image: reviewer1,
                }
            }
        },

        
    }
]
 */
const ServicePage = () => {
  // const [showModal, setShowModal] = React.useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  const params = useParams();
  const serviceTitle = params.serviceTitle;
  // if(serviceID >3 || serviceID <1){
  //   return(
  //     <ErrorPage text="Service not found" />
  //   )
  // }
  //navigator(`/services/${title.toLowerCase().replace(/ /g, '-')}`);
  if (serviceTitle !== 'full-bathroom-remodeling' && serviceTitle !== 'bathtub-shower-conversions' && serviceTitle !== 'senior-friendly-bathroom') {
    
    return (
      // <ErrorPage text="Service not found" />
      <div>
        {
          serviceTitle
        }
      </div>
    )
  }
  // console.log(data[0]);
  // const service = data[0][`service${serviceID}`];
  // const service = data[0][`service${serviceTitle.replace(/-/g, '')}`];
  // console.log(serviceID);
  //find the services to match service by the service title
  // function findServiceByHeroTitleWithoutFind(data, targetTitle) {
  //   if(data)
  //  }
  const findService = () =>{
    const {service1, service2, service3} = data[0];
    if("full-bathroom-remodeling" === serviceTitle) return service1
    else if("bathtub-shower-conversions" === serviceTitle) return service2
    else if("senior-friendly-bathroom" === serviceTitle) return service3
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
        <title>{service.hero.title} | Muse Bathrooms</title>
        <meta name="description" content={metaDescription} />
        <meta name='url' content={metaLink} />
        <meta name='identifier-URL' content={metaLink} />
        <meta property="og:title" content={service.hero.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={service.hero.image} />
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
        image = {service.renovation.image}
        title = {service.renovation.title}
        body1 = {service.renovation.body1}
        body2 = {service.renovation.body2}
      />
      <ConsultationForm showForm={true}/>
      
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
