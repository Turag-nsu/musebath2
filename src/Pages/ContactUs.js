import React from 'react';
import { useEffect } from 'react';
import ContactUsHeroPart from '../components/ContactUsHeroPart/ContactUsHeroPart';
import ContactArea from '../components/ContactArea/ContactArea';
import FormAndMap from '../components/FormAndMap/FormAndMap';
import { Container } from 'react-bootstrap';
const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="contact-us">
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
