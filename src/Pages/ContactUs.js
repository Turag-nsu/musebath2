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
                <title>Transform Your Space with Musebath - Contact Us for Exceptional Bathroom Remodeling in Missouri, USA!</title>
                <meta name="description" content="Connect with Musebath, your trusted source for unparalleled bathroom remodeling in Missouri, USA. Elevate your space with innovative designs and top-notch craftsmanship. Contact us now to turn your dream bathroom into a reality – excellence, just a message away!" />
                <meta name="keywords" content="bathroom remodeling, remodeling contractors, expert craftsmanship, innovative designs, trusted remodeling services, premier bathroom solutions, Missouri bathroom remodeling, USA bathroom renovations, near me bathroom contractors, creative bathroom designs, professional remodelers, bathroom makeover specialists, customized bathroom projects, exceptional space transformations" />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Transform Your Space with Musebath - Contact Us for Exceptional Bathroom Remodeling in Missouri, USA!" />
                <meta property="og:description" content="Connect with Musebath, your trusted source for unparalleled bathroom remodeling in Missouri, USA. Elevate your space with innovative designs and top-notch craftsmanship. Contact us now to turn your dream bathroom into a reality – excellence, just a message away!" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://musebath.us/contact-us" />
            </Helmet>

            <div style={{ backgroundColor: '#FFF' }}>
                <ContactUsHeroPart />
            </div>
            <Container>
                <div className='form-map-area' style={{ position: "relative" }}>
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
