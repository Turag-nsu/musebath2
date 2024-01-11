import React from 'react';
import { useEffect } from 'react';
import ContactUsHeroPart from '../components/ContactUsHeroPart/ContactUsHeroPart';
import ContactArea from '../components/ContactArea/ContactArea';
import FormAndMap from '../components/FormAndMap/FormAndMap';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="contact-us">
            <Helmet>
                <title>Contact Us | Muse Bathrooms</title>
                <meta name="description" content="Contact Muse Bathrooms for bathroom renovations in Missouri. We are a family owned and operated business that has been in the industry for over 30 years." />
                <meta name="keywords" content="bathroom renovations, bathroom renovations Missouri, bathroom renovations near me, bathroom renovations in melbourne, bathroom renovations eastern suburbs, bathroom renovations south eastern suburbs, bathroom renovations north eastern suburbs, bathroom renovations bayside, bathroom renovations south east melbourne, bathroom renovations north melbourne, bathroom renovations south Missouri, bathroom renovations west Missouri, bathroom renovations south east, bathroom renovations north east, bathroom renovations bayside Missouri, bathroom renovations south east suburbs, bathroom renovations north east suburbs, bathroom renovations bayside suburbs, bathroom renovations south east suburbs Missouri, bathroom renovations north east suburbs Missouri, bathroom renovations bayside suburbs Missouri, bathroom renovations south east suburbs Missouri, bathroom renovations north east suburbs Missouri, bathroom renovations bayside suburbs vic" />
            </Helmet>
            <div style={{ backgroundColor: '#FFF' }}>
                <ContactUsHeroPart />
            </div>
            <Container>
                <div className='form-map-area' style={{position:"relative"}}>
                    <FormAndMap />
                </div>
                <div style={{ backgroundColor: '#FFF' }}>
                    <ContactArea />
                </div>
            </Container>
        </div>
    );
}
export default ContactUs;
