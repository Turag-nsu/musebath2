import React, { useEffect } from 'react';
import ProjectsHeroPart from '../../components/ProjectsHeroPart/ProjectsHeroPart';
import ProjectArea from '../../components/ProjectsArea/ProjectArea';
import ProjectTabs from '../../components/ProjectTabs/ProjectTabs';
import ConsultationForm from '../../components/ConsultationForm/ConsultationForm';
import TrustedArea from '../../components/TrustedArea/TrustedArea';
import SingleProjectPage from './SingleProjectPage/SingleProjectPage';
import BlogHeroPart from '../../components/BlogHeroPart/BlogHeroPart';
import projectBg from '../../Images/Project/project-hero-bg.jpeg';

const ProjectPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }
        , []);

    return (
        <div>
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
            <div>
                {/* <SingleProjectPage project={projects} /> */}
            </div>
        </div>
    );
};
export default ProjectPage;
