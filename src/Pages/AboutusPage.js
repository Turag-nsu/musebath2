import React, { useEffect } from "react";
import aboutHero from "../../src/Images/About-us/about-us-hero.jpg";
import card1pic from "../../src/Images/About-us/about_img1.jpg";
import card2pic from "../../src/Images/About-us/about_img2.jpg";
import BlogHeroPart from "../components/BlogHeroPart/BlogHeroPart";
import ServicePageCard1 from "../components/ServicePageCard1/ServicePageCard1";
import TrustedArea from "../components/TrustedArea/TrustedArea";
import WhyChooseArea2 from "../components/WhyChooseArea2/WhyChooseArea2";
import { Container } from "react-bootstrap";
import WhyChooseGallery from "../components/WhyChooseGallery/WhyChooseGallery";
import { Helmet } from "react-helmet";
const AboutusPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }
        , []);
    return (
        <div>
            <Helmet>
                <title>About Us | Muse Bathrooms</title>
                <meta name="description" content="Muse Bathrooms is a family owned and operated business that has been in the industry for over 30 years. We specialize in bathroom renovations in Missouri." />
                <meta name="keywords" content="bathroom renovations, bathroom renovations Missouri, bathroom renovations near me, bathroom renovations in melbourne, bathroom renovations eastern suburbs, bathroom renovations south eastern suburbs, bathroom renovations north eastern suburbs, bathroom renovations bayside, bathroom renovations south east melbourne, bathroom renovations north melbourne, bathroom renovations south Missouri, bathroom renovations west Missouri, bathroom renovations south east, bathroom renovations north east, bathroom renovations bayside Missouri, bathroom renovations south east suburbs, bathroom renovations north east suburbs, bathroom renovations bayside suburbs, bathroom renovations south east suburbs Missouri, bathroom renovations north east suburbs Missouri, bathroom renovations bayside suburbs Missouri, bathroom renovations south east suburbs Missouri, bathroom renovations north east suburbs Missouri, bathroom renovations bayside suburbs vic" />
            </Helmet>
            <BlogHeroPart text="About Us" bg={aboutHero} />
            <Container style={{ padding: '0' }}>
                <ServicePageCard1
                    image={card1pic}
                    title="PDB – PACKAGE DEAL BATHROOMS"
                    body1="Package Deal Bathrooms in Adelaide has been in the renovation ind ustry for well over 40 years. We come from a long lineage of qualified trades people. Pasquale (our grandfather) was a qualified tiler and bricklayer who migrated from Italy in the early 60’s."
                    body2="After settling in Adelaide, he would further teach his son Tony and son-in-law Joe the same trades. Keeping with tradition, their children Sam and Domenic also learnt the same skills, picking up the tilers trowel to continue the family business."
                />
                <WhyChooseArea2></WhyChooseArea2>
            </Container>
            <WhyChooseGallery></WhyChooseGallery>
            <Container style={{ padding: '0' }}>
                <TrustedArea />

            </Container>
        </div>

    );
}

export default AboutusPage;