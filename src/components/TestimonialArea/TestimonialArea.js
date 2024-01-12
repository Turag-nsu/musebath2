import React, { useState } from 'react';
import './TestimonialArea.css'
import { Row, Col, Container } from 'react-bootstrap';
import callMade2 from '../../Images/call-made2.svg'
import callMade3 from '../../Images/call-made3.svg'
import TestimonialAreaCard from '../TestimonialAreaCard/TestimonialAreaCard';
import profile1 from '../../Images/profile-1.png';
import profile2 from '../../Images/profile-2.png';

const TestimonialArea = () => {
    const [testimonials, setTestimonials] = useState([
        {
            id: 1,
            img: profile1,
            name: "Theresa Webb",
            title: "Product designer",
            text: "Muse Bath has truly redefined my bathing experience with their exceptional products. From their exquisite selection of bath salts to their soothing aromatherapy mists, every product is a testament to their commitment to quality and relaxation. The carefully curated ingredients and captivating scents transform my daily bath routine into a luxurious and rejuvenating ritual. Muse Bath's attention to detail and dedication to creating a serene atmosphere make them my go-to choice for elevating self-care moments."
        },
        {
            id: 2,
            img: profile2,
            name: "Guy Hawkins",
            title: "Product designer",
            text: "Muse Bath stands out as a beacon of tranquility in the world of self-care products. Their bath soaks, infused with natural essences and botanicals, turn ordinary baths into sublime escapes from the daily hustle. With each use, I am transported to a state of calmness and balance, thanks to the harmonious blend of scents and the thoughtfully designed packaging. Muse Bath has undeniably mastered the art of crafting products that nourish both the body and the soul."
        },

    ]);

    const handelClickNext = () => {
        const testimonialsArea = document.querySelector('.testimonial-review-area');
        testimonialsArea.style.transform = 'translateX(-100%)';
        testimonialsArea.style.transition = 'all 0.5s ease-in-out';
        setTimeout(() => {
            testimonialsArea.style.transform = 'translateX(0%)';
            testimonialsArea.style.transform = 'opacity(1)';
            testimonialsArea.style.transition = 'opacity 0.5s ease-in-out';

        }, 500);

        setTestimonials(prevTestimonials => {
            const nextTestimonials = prevTestimonials.slice(2).concat(prevTestimonials.slice(0, 2));
            return nextTestimonials;
        });
    }
    const handelClickPrev = () => {
        const testimonialsArea = document.querySelector('.testimonial-review-area');
        testimonialsArea.style.transform = 'translateX(100%)';
        testimonialsArea.style.transition = 'all 0.5s ease-in-out';
        setTimeout(() => {
            testimonialsArea.style.transform = 'translateX(0%)';
            testimonialsArea.style.transform = 'opacity(1)';
            testimonialsArea.style.transition = 'opacity 0.5s ease-in-out';

        }, 500);

        setTestimonials(prevTestimonials => {
            const nextTestimonials = prevTestimonials.slice(2).concat(prevTestimonials.slice(0, 2));
            return nextTestimonials;
        });
    }
    return (
        <div className='testimonial-area'>
            <Container>
                <div className="testimonial-area-title"
                    data-aos="zoom-in"
                    data-aos-delay={200}
                    data-aos-duration="1000"
                    data-aos-ofset="200"
                >
                    <div>
                        <article>
                            <h1>Testimonials from Our Valued Clients</h1>
                        </article>
                    </div>
                    <div className='testimonial-area-title-buttons'>
                        <button
                            onClick={handelClickPrev}
                            style={{ border: 'none' }}>
                            <div className="testimonial-prev-button">
                                <img src={callMade3} alt="" />
                            </div>
                        </button>
                        <button
                            onClick={handelClickNext}
                            style={{ border: 'none' }}>
                            <div className="testimonial-next-button">
                                <img src={callMade2} alt="" />
                            </div>
                        </button>
                    </div>
                </div>
                <div className="testimonial-review-area">
                    <Row xs={1} md={2}>
                        {testimonials.slice(0, 2).map(testimonial =>
                            <Col key={testimonial.id}>
                                <TestimonialAreaCard img={testimonial.img} text={testimonial.text} name={testimonial.name} title={testimonial.title}></TestimonialAreaCard>
                            </Col>
                        )}
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default TestimonialArea;