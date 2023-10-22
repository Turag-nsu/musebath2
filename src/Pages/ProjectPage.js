import React from 'react';
import ProjectsHeroPart from '../components/ProjectsHeroPart/ProjectsHeroPart';
import ProjectArea from './../components/ProjectsArea/ProjectArea';
import ProjectTabs from '../components/ProjectTabs/ProjectTabs';
import ConsultationForm from '../components/ConsultationForm/ConsultationForm';
import TrustedArea from '../components/TrustedArea/TrustedArea';
const ProjectPage = () => {
    // Your component code goes here
    return (
        <div>
            <div>
                <ProjectsHeroPart />
            </div>
            <div>
                <ProjectTabs />
            </div>
            <div>
                <ProjectArea />
            </div>
            <div>
                <ConsultationForm showForm={true}/>
            </div>
            <div>
                <TrustedArea />
            </div>
        </div>
    );
};
export default ProjectPage;
