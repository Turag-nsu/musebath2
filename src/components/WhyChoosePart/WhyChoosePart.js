import React from 'react';
import './WhyChoosePart.css';
import Card1 from '../Card1/Card1';
import cardImg1 from '../../Images/image-1663.png';
import cardImg2 from '../../Images/image-1664.png';
import cardImg3 from '../../Images/image-1665.png';
import cardImg4 from '../../Images/image-1666.png';
import { Container } from 'react-bootstrap';
const card1Data = [
    {   
        imageLink: cardImg1,
        title: 'Free Design Service',
        text: 'Re-Bath’s design consultants help you find the perfect solutions and craft a design to transform your space into the bathroom of your dreams.'
    },
    {
        imageLink: cardImg2,
        title: 'Free Design Service',
        text: 'Re-Bath’s design consultants help you find the perfect solutions and craft a design to transform your space into the bathroom of your dreams.'
    },
    {
        imageLink: cardImg3,
        title: 'Free Design Service',
        text: 'Re-Bath’s design consultants help you find the perfect solutions and craft a design to transform your space into the bathroom of your dreams.'
    },
    {
        imageLink: cardImg4,
        title: 'Free Design Service',
        text: 'Re-Bath’s design consultants help you find the perfect solutions and craft a design to transform your space into the bathroom of your dreams.'
    }
];
const WhyChoosePart = () => {
    let id=1; 
    return (
        <div className='why-choose-area' >
            <Container>
            <p className="title-line">Why Choose our products</p>
            <div className="cardArea">
                {card1Data.map((data, index) => <Card1 key={index} imageLink={data.imageLink} title={data.title} text={data.text} id={id++}/>)}
            </div>
            </Container>
        </div>
    );
};

export default WhyChoosePart;