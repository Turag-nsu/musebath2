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
                <title>Our Projects | Musebath</title>
                <meta name="description" content="Musebath has amazing bathroom renovation projects. Check out our projects and get ideas for your bathroom renovation. We are the best bathroom renovation company in Missouri." />
                <meta name="keywords" content="bathroom renovations, bathroom renovations Missouri, bathroom renovations near me, bathroom renovations in melbourne, bathroom renovations eastern suburbs, bathroom renovations south eastern suburbs" />
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
