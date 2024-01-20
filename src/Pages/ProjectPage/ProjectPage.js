import React, { useEffect } from 'react';
import ProjectArea from '../../components/ProjectsArea/ProjectArea';
import ConsultationForm from '../../components/ConsultationForm/ConsultationForm';
import TrustedArea from '../../components/TrustedArea/TrustedArea';
import BlogHeroPart from '../../components/BlogHeroPart/BlogHeroPart';
import projectBg from '../../Images/Project/project-hero-bg.jpeg';
import './ProjectPage.css'
import { Helmet } from 'react-helmet';

const ProjectPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }
        , []);

    return (
        <div>
            <Helmet>
                <title>Masterpiece Bathroom Remodeling Projects | Musebath Portfolio</title>
                <meta name="description" content="Explore Musebath's portfolio showcasing the best in bathroom remodeling projects. Trusted craftsmanship and innovative designs come together in our Missouri, USA transformations. Get inspired by our top-notch work, near you, as we redefine bathroom interiors with excellence." />
                <meta name="author" content="Musebath" />
                <meta name="keywords" content="Bathroom Remodeling Missouri, Trusted Bathroom Renovations, Best Bathroom Interior Design, Top-Rated Remodelers in USA, Expert Bathroom Contractors, Missouri's Premier Bath Renovations, America's Trusted Bathroom Remodels, Near Me Bathroom Upgrades, Best USA Bathroom Makeovers, Musebath Excellence in Remodeling" />

                <meta property="og:title" content="Masterpiece Bathroom Remodeling Projects | Musebath Portfolio" />
                <meta property="og:description" content="Explore Musebath's portfolio showcasing the best in bathroom remodeling projects. Trusted craftsmanship and innovative designs come together in our Missouri, USA transformations. Get inspired by our top-notch work, near you, as we redefine bathroom interiors with excellence." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://musebath.us/about-us" />
            </Helmet>
            {/* <div > */}
            <BlogHeroPart text="Our Projects" bg={projectBg} />
            {/* </div> */}
            <div>
                {/* <ProjectTabs /> */}
            </div>
            <div style={{ position: "relative", zIndex: "0" }}>
                <ProjectArea />
            </div>
            <div>
                <ConsultationForm showForm={true} />
            </div>
            <div>
                <TrustedArea />
            </div>

        </div>
    );
};
export default ProjectPage;
