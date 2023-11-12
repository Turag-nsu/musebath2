import React from 'react';
import './ProjectArea.css';
import { Container, Row, Col } from 'react-bootstrap';
import CustomButton from '../CustomButton/CustomButton';
import Nav from 'react-bootstrap/Nav';
// Import your project images here
import project1 from '../../Images/Project/project-1.jpeg';
import project2 from '../../Images/Project/project-2.jpeg';
import project3 from '../../Images/Project/project-3.jpeg';
import project4 from '../../Images/Project/project-4.jpeg';
import project5 from '../../Images/Project/project-5.jpeg';
import project6 from '../../Images/Project/project-6.jpeg';
import project7 from '../../Images/Project/project-7.jpeg';
import project8 from '../../Images/Project/project-8.jpeg';
import project9 from '../../Images/Project/project-9.jpeg';
import project10 from '../../Images/Project/project-10.jpeg';
import project11 from '../../Images/Project/project-11.jpeg';
import project12 from '../../Images/Project/project-12.jpeg';
import project13 from '../../Images/Project/project-13.jpeg';
import project14 from '../../Images/Project/project-14.jpeg';
import project15 from '../../Images/Project/project-15.jpeg';
import project16 from '../../Images/Project/project-16.jpeg';
import project17 from '../../Images/Project/project-17.jpeg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import PageLoading from '../PageLoading/PageLoading';
// const projectImages = [
//     project1, project2, project3, project4, project5, project6, project7, project8, project9, project10, project11, project12, project13, project14, project15, project16, project17

// ];

const ProjectArea = () => {
    const navigate = useNavigate();
    const [projects, setProjects] = React.useState([]);
    const [activeKey, setActiveKey] = React.useState("");
    const [projectImages, setProjectImages] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    // const [category, setCategory] = React.useState("");
    const handleSelect = async (selectedKey) => {
        if (selectedKey === "") navigate(`/projects`);
        else navigate(`/projects?category=${selectedKey}`);
        // setCategory(selectedKey);
        setActiveKey(selectedKey);
        await fetchProjects(selectedKey);
    };

    
    const fetchProjects = async (cat) => {
        // const { category } = useParams();
        // setCategory(window.location.search.split("=")[1]);
        setIsLoading(true);
        
        if (cat==="") {
            const response = await axios.get(`https://musebath.onrender.com/api/project-posts`);
            setProjects(response.data);
            setProjectImages(projectsToProjectImagesArray(response.data));
            if (response.status === 200) setIsLoading(false);
            else { setIsLoading(false) };
        } else {
            const response = await axios.get(`https://musebath.onrender.com/api/project-posts?category=${cat}`);
            // console.log(`http://localhost:3000/api/project-posts?category=${cat}`);
            setProjects(response.data);
            setProjectImages(projectsToProjectImagesArray(response.data));
            if (response.status === 200) setIsLoading(false);
            else { setIsLoading(false) };

        }

    }

    const projectsToProjectImagesArray = (projects) => {
        const projectImagesArray = [];
        projects.forEach(project => {
            projectImagesArray.push(project.images[0].img);
        });
        return projectImagesArray;
    }

    React.useEffect(() => {
        window.scrollTo(0, 0);
        fetchProjects("");
    }, []);

    const singleCol = (start, end, cls) => {
        const rows = [];
        let imgClass = cls === 'large' ? 'project-area-pic-large' : 'project-area-pic-small';
        imgClass = cls === 'last' ? 'project-area-pic-last' : imgClass;
        // for (let i = start; i <= end; i++) {
        rows.push(
            projectImages[start - 1] && <Row>
                <div className={`${imgClass}`} data-aos="flip-up" data-aos-delay={200}>
                    <Link to={`/projects/${start}`}>
                        <img src={projectImages[start - 1]} alt={`Project ${start}`} loading='lazy' />
                    </Link>
                </div>
            </Row>
        );
        rows.push(
            projectImages[end - 1] && <Row>
                <div className={`${imgClass}`} data-aos="flip-up" data-aos-delay={200}>
                    <Link to={`/projects/${end}`}>
                        <img src={projectImages[end - 1]} alt={`Project ${end}`} loading='lazy'/>
                    </Link>
                </div>
            </Row>
        );
        // }
        return rows;
    };
    if (isLoading) return <PageLoading />
    return (
        <div className="project-area">
            <Container>
                <div className="project-tabs">
                    <Nav defaultActiveKey="" activeKey={activeKey} onSelect={handleSelect} as="ul" variant="underline">
                        <Nav.Item as="li">
                            <Nav.Link eventKey="">All</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="Full-bathroom-remodeling">Full bathroom remodeling</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="Bathtub-shower-conversions">Bathtub-shower conversions</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="Senior-friendly-bathroom">Senior friendly bathroom</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </Container >
            <Container>

                <Row xs={1} md={3}>
                    <Col>
                        {singleCol(1, 4, "")}
                        {singleCol(7, 10, 'large')}
                        {singleCol(13, 15, "")}
                    </Col>
                    <Col>
                        {singleCol(2, 6, 'large')}
                        {singleCol(9, "")}
                        {singleCol(12, 16, 'large')}

                        {projects.length>17&& <div className="project-area-btn">
                            <CustomButton text="View More" />
                        </div>}
                        {/* Add more image rows as needed */}
                    </Col>
                    <Col>
                        {singleCol(3, 5, "")}
                        {singleCol(8, 11, 'large')}
                        {singleCol(14, 17, "")}
                        {/* Add more image rows as needed */}
                        <div className="project-area-btn2">
                            <CustomButton text="View More" />
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default ProjectArea;
