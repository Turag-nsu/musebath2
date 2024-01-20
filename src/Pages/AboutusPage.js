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
                <title>About Musebath - Your Trusted Partner in Exceptional Bathroom Remodeling</title>
                <meta name="description" content="Learn about Musebath, the name synonymous with trusted craftsmanship and innovative designs in the realm of bathroom remodeling. Discover our commitment to excellence and personalized service in Missouri, USA. As your dedicated partner, we transform spaces and redefine bathroom interiors with creativity and passion." />
                <meta name="keywords" content="About Musebath, Trusted remodeling company, Innovative bathroom designs, Exceptional craftsmanship, Bathroom remodeling expertise, Missouri, USA, Personalized service, Passionate team, Creative transformations, Reliability in remodeling" />

                <meta property="og:title" content="About Musebath - Your Trusted Partner in Exceptional Bathroom Remodeling" />
                <meta property="og:description" content="Learn about Musebath, the name synonymous with trusted craftsmanship and innovative designs in the realm of bathroom remodeling. Discover our commitment to excellence and personalized service in Missouri, USA. As your dedicated partner, we transform spaces and redefine bathroom interiors with creativity and passion." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://musebath.us/about-us" />

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