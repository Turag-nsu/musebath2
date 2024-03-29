import React from 'react';
import './ProjectArea.css';
import { Container, Row, Col } from 'react-bootstrap';
import CustomButton from '../CustomButton/CustomButton';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import PageLoading from '../PageLoading/PageLoading';
import '../ProjectTabs/ProjectTabs.css'

const ProjectArea = () => {
    const navigate = useNavigate();
    
    const [activeKey, setActiveKey] = React.useState("");
    const [projectImages, setProjectImages] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const limit = 17;
    const [showImages, setShowImages] = React.useState([]);
    const handleSelect = async (selectedKey) => {
        if (selectedKey === "") navigate(`/projects`);
        else navigate(`/projects?category=${selectedKey}`);
        // setCategory(selectedKey);
        setActiveKey(selectedKey);
        await fetchProjects(selectedKey);
    };
    
    const fetchProjects = async (cat) => {
        setIsLoading(true);
        
        if (cat==="") {
            const response = await axios.get(`https://musebath.onrender.com/api/project-posts`);
            
            setProjectImages(projectsToProjectImagesArray(response.data));
            
            setShowImages(projectsToProjectImagesArray(response.data).slice(0, limit));
            if (response.status === 200) setIsLoading(false);
            else { setIsLoading(false) };
        } else {
            const response = await axios.get(`https://musebath.onrender.com/api/project-posts?category=${cat}`);
            setProjectImages(projectsToProjectImagesArray(response.data));
            setShowImages(projectsToProjectImagesArray(response.data).slice(0, limit));
            if (response.status === 200) setIsLoading(false);
            else { setIsLoading(false) };

        }

    }
    const linkGenerator = (title, id) => {
        const link = title.toLowerCase().replace(/ /g, '-');
        const linkId = id.toString();
        const linkIdLength = linkId.length;
        const linkIdLengthDifference = 5 - linkIdLength;
        let linkIdString = '';
        for (let i = 0; i < linkIdLengthDifference; i++) {
            linkIdString += '0';
        }
        linkIdString += linkId;
        return `${link}-${linkIdString}`;
    }
    const projectsToProjectImagesArray = (projects) => {
        console.log(projects);
        const projectImagesArray = [];
        projects.forEach(project => {
            const allImg = project.images.map(image => {
                return { img: image.img, id: project.id, title: project.title}
            });
            projectImagesArray.push(...allImg);
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
        // imgClass = cls === 'last' ? 'project-area-pic-last' : imgClass;
        // console.log("start: ", start, " end: ", end);
        rows.push(
            showImages[start - 1] && <Row>
                <div className={`${imgClass}`} 
                data-aos="flip-up" 
                data-aos-delay={200}
                data-aos-duration="1000"
                data-aos-ofset="200"
                data-aos-anchor-placement="top-center"
                >

                {/* {console.log(showImages[start-1].title, showImages[start-1].id)} */}
                    <Link to={`/projects/${
                        linkGenerator(showImages[start-1].title, showImages[start-1].id)
                        }`}>
                        <img 
                        loading="lazy" src={showImages[start - 1].img} alt={`Project ${start}`} />
                    </Link>
                </div>
            </Row>
        );
        rows.push(
            showImages[end - 1] && <Row>
                <div className={`${imgClass}`} 
                data-aos="flip-up" 
                data-aos-delay={200}
                data-aos-duration="1000"
                data-aos-ofset="200"
                data-aos-anchor-placement="top-center"
                >
                    {/* <p>{end}</p> */}
                    <Link to={`/projects/${
                        linkGenerator(showImages[end-1].title, showImages[end-1].id)
                    }`}>
                        <img 
                        
                        loading="lazy" src={showImages[end - 1].img} alt={`Project ${end}`}/>
                    </Link>
                </div>
            </Row>
        );
        // }
        return rows;
    };
    const handleMoreClick = () => {
        setShowImages(projectImages.slice(0, showImages.length + limit));
        console.log(showImages, " pro: ", projectImages)
    }

    if (isLoading) return <PageLoading />
    return (
        <div className="project-area">
            <Container>
                <div className="project-tabs"
                data-aos="zoom-in"
                data-aos-delay={200}
                data-aos-duration="1000"
                data-aos-ofset="200"
                >
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
                        {singleCol(13, 16, "")}
                        {singleCol(19,22, "large")}
                        {singleCol(25, 28, "")}
                        {singleCol(31, 34, "large")}
                        {singleCol(37, 40, "")}
                        {singleCol(43, 46, "large")}
                    </Col>
                    <Col>
                        {singleCol(2, 6, 'large')}
                        {singleCol(9, "")}
                        {singleCol(12, 15, 'large')}
                        {singleCol(18, "")}
                        {singleCol(21, 24, "large")}
                        {singleCol(27, '')}
                        {singleCol(30, 33, "large")}
                        {singleCol(42, "")}
                        {projectImages.length>limit&&  projectImages.length!=showImages.length && 
                        <div 
                        data-aos="fade-up"
                        data-aos-delay={200}
                        data-aos-duration="1000"
                        data-aos-ofset="200"
                        data-aos-anchor-placement="top-center"
                        className="project-area-btn">
                            <CustomButton
                                onClick={handleMoreClick}
                            text="View More" />
                        </div>}
                        
                    </Col>
                    <Col>
                        {singleCol(3, 5, "")}
                        {singleCol(8, 11, 'large')}
                        {singleCol(14, 17, "")}
                        {singleCol(20, 23, 'large')}
                        {singleCol(26, 29, '')}
                        {singleCol(32, 35, "large")}
                        {singleCol(36, 39, "")}
                        {singleCol(41, 44, "large")}
                        {/* Add more image rows as needed */}
                        {projectImages.length>limit&& projectImages.length!=showImages.length && <div className="project-area-btn2">
                            <CustomButton
                                onClick={handleMoreClick}
                            text="View More" />
                        </div>}
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default ProjectArea;
