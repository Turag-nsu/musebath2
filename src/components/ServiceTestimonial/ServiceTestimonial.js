import React from 'react';
import './ServiceTestimonial.css';
import star from '../../Images/stars.svg'
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
// import { useState } from 'react';
import data from '../../Database/Data'
import nextbtn from '../../Images/arrow.svg'
import prevbtn from '../../Images/Service/previous-arrow.svg'

const ServiceTestimonial = () => {
    const [testimonials, setTestimonials] = useState([
        {
            id: 1,
            img: data[0].service1.testimonial.reviewer.image,
            name: "Theresa Webb",
            title: "Product designer",
            text: "Muse Bath has truly redefined my bathing experience with their exceptional products. From their exquisite selection of bath salts to their soothing aromatherapy mists, every product is a testament to their commitment to quality and relaxation. The carefully curated ingredients and captivating scents transform my daily bath routine into a luxurious and rejuvenating ritual. Muse Bath's attention to detail and dedication to creating a serene atmosphere make them my go-to choice for elevating self-care moments."
        },
        {
            id: 2,
            img: data[0].service2.testimonial.reviewer.image,
            name: "Guy Hawkins",
            title: "Product designer",
            text: "Muse Bath stands out as a beacon of tranquility in the world of self-care products. Their bath soaks, infused with natural essences and botanicals, turn ordinary baths into sublime escapes from the daily hustle. With each use, I am transported to a state of calmness and balance, thanks to the harmonious blend of scents and the thoughtfully designed packaging. Muse Bath has undeniably mastered the art of crafting products that nourish both the body and the soul."
        },
        {
            id: 3,
            img: data[0].service1.testimonial.reviewer.image,
            name: "Theresa Webb",
            title: "Product designer",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quia sit blanditiis nihil corporis est. Blanditiis recusandae ea quasi, cum quas officiis, laudantium illum error, sit earum amet aliquid porro?"
        },
        {
            id: 4,
            img: data[0].service2.testimonial.reviewer.image,
            name: "Guy Hawkins",
            title: "Product designer",
            text: "guy Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quia sit blanditiis nihil corporis est. Blanditiis recusandae ea quasi, cum quas officiis, laudantium illum error, sit earum amet aliquid porro?"
        }
      ]);
    const { text, img, name, title } = testimonials[0];
    const handelClickNext = () => {
        const testimonialsArea = document.querySelector('.service-testimonial-area-card');
        testimonialsArea.style.transform = 'translateX(-100%)';
        testimonialsArea.style.transition = 'all 0.5s ease-in-out';
        setTimeout(() => {
            testimonialsArea.style.transform = 'translateX(0%)';
            testimonialsArea.style.transform = 'opacity(1)';
            testimonialsArea.style.transition = 'opacity 0.5s ease-in-out';

        }, 500);

        setTestimonials(prevTestimonials => {
            const nextTestimonials = prevTestimonials.slice(1).concat(prevTestimonials.slice(0, 1));
            return nextTestimonials;
        });
    }
    const handelClickPrev = () => {
        const testimonialsArea = document.querySelector('.service-testimonial-area-card');
        testimonialsArea.style.transform = 'translateX(100%)';
        testimonialsArea.style.transition = 'all 0.5s ease-in-out';
        setTimeout(() => {
            testimonialsArea.style.transform = 'translateX(0%)';
            testimonialsArea.style.transform = 'opacity(1)';
            testimonialsArea.style.transition = 'opacity 0.5s ease-in-out';

        }, 500);

        setTestimonials(prevTestimonials => {
            const nextTestimonials = prevTestimonials.slice(1).concat(prevTestimonials.slice(0, 1));
            return nextTestimonials;
        });
    }

    return (
        <div className='service-container'>
            <Container>
                <div className='service-testimonial-area'>
                    <div className='service-testimonial-area-title'>
                        <p>Testimonials from Our Valued Clients</p>
                    </div>
                    <div className='service-testimonial-area-card'>
                        <div className='service-testimonial-area-card-container'>
                            <img style={{ width: '11rem', marginBottom: '1rem' }} src={star} alt="" />
                            <p className="service-testimonial-area-card-text">{text}</p>
                        </div>
                        <div className="service-reviewer-profile">
                            <div className="service-reviewer-img">
                                <img src={img} alt="" />
                            </div>
                            <div className='service-reviewer-details'>
                                <p className="service-reviewer-name">{name}</p>
                                <p className="service-reviewer-title">{title}</p>
                            </div>
                        </div>
                    </div>
                    <div className='service-testimonial-next-btn'>
                        <button
                            onClick={handelClickNext}
                            // style={{ border: 'none' }}
                        >
                            <img src={nextbtn} alt="" />
                        </button>
                    </div>
                    <div className='service-testimonial-previous-btn'>
                        <button
                            onClick={handelClickPrev}
                        >
                            <img src={prevbtn} alt="" />
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ServiceTestimonial;
