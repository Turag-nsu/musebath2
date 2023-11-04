import React from 'react';
import './WhyChoosePart.css';
import Card1 from '../Card1/Card1';
import cardImg1 from '../../Images/whychose-pic1.png';
import cardImg2 from '../../Images/whychose-pic2.png';
import cardImg3 from '../../Images/whychose-pic3.png';
import cardImg4 from '../../Images/whychose-pic4.png';
import { Row,Col,Container } from 'react-bootstrap';
const card1Data = [
    {   
        imageLink: cardImg1,
        title: 'Complimentary Design Service',
        text: 'Led by the expertise of Muse Bath\'s design consultants, explore perfect solutions and witness their adept crafting of a design that transforms your space into the bathroom you\'ve always envisioned.'
    },
    {
        imageLink: cardImg2,
        title: 'High Quality Materials',
        text: 'Whether it\'s Musebath\'s unique brand or renowned manufacturers, our unwavering commitment is to provide you with the highest quality products available today.'
    },
    {
        imageLink: cardImg3,
        title: 'Quality Expert Installation',
        text: 'Musebath\'s installation experts take care of every phase of your remodel—from dismantling to installation—within a matter of days, relieving you of both time and stress.'
    },
    {
        imageLink: cardImg4,
        title: 'Extended Warranty Coverage',
        text: 'Rely on our 10 years labour warranty and lifetime plumbing warranty to ensure your confidence in the satisfaction, care, and maintenance of your bathroom.'
    }
];
const WhyChoosePart = () => {
    let id=1; 
    return (
        <div className='why-choose-area' >
            <Container>
            <p className="title-line">Why Choose our services</p>
            <div className="cardArea">
                <Row xs={1} md={4}> 
                {card1Data.map((data, index) =><Col><Card1 key={index} imageLink={data.imageLink} title={data.title} text={data.text} id={id++}/></Col>)}
                </Row>
                
            </div>
            </Container>
        </div>
    );
};

export default WhyChoosePart;