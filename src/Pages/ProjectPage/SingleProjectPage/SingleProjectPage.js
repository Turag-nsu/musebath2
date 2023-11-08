import React from 'react';
import './SingleProjectPage.css';
import { Container, Row, Col } from 'react-bootstrap';
import ContactUsForm from '../../../components/ContactUsForm/ContactUsForm';
import ImageSlider from '../../../components/ImageSlider/ImageSlider';
import ConsultationForm from '../../../components/ConsultationForm/ConsultationForm';
import TrustedArea from '../../../components/TrustedArea/TrustedArea';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PageLoading from '../../../components/PageLoading/PageLoading';
import ErrorPage from '../../../components/ErrorPage/ErrorPage';

const SingleProjectPage = () => {
    const [project, setProject] = React.useState();
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const {projectID} = useParams();
    // console.log("projectID", projectID);
//     try {
//         const response = await axios.get(`http://localhost:3000/api/blog-posts/${blogID}`);
//         console.log(response);
//         if (response.status !== 200) {
//             throw new Error('Failed to fetch blog data');
//         } else {
//             setBlogData(response.data);
//             // console.log(response.status);
//             setIsLoading(false);
//         }
//     } catch (error) {
//         setError(true);
//         setIsLoading(false);
//         // return <ErrorPage />;
//     }
// };
    const fetchProject = async () => {
        // const response = await axios.get(`http://localhost:3000/api/project-posts/${projectID}`);
        // setProject(response.data);
        // if(response.status === 200) setIsLoading(false);
        // else {setError(true); setIsLoading(false)};
        try {
            const response = await axios.get(`http://localhost:3000/api/project-posts/${projectID}`);
            console.log(response);
            if (response.status !== 200) {
                throw new Error('Failed to fetch blog data');
            } else {
                setProject(response.data);
                // console.log(response.status);
                setIsLoading(false);
            }
        } catch (error) {
            setError(true);
            setIsLoading(false);
            // return <ErrorPage />;
        }
       
    }
    React.useEffect(() => {
        window.scrollTo(0, 0);
        fetchProject();
    }, []);
    if(error) return <ErrorPage text="Project not found" />
    if(isLoading) return <PageLoading />
    return (
        <div style={{ overflow: 'hidden' }} className='single-project-page-container'>
            <Container>
            <div className="single-project-header">
                <p className='title'>{project.title}</p>
                <p className='subtitle'>{project.subtitle}</p>
            </div>
            </Container>
            <ImageSlider images={project.images} />
            <Container>
                <Row>
                    <Col md={8}>
                        <div className='single-projext-page-details-container'>
                            <div className="single-projext-page-details-title">
                                <p>Project Description</p>
                            </div>
                            <div className="single-projext-page-details-body">
                                {
                                    project.description.map((item, index) => {
                                        return (
                                            <p key={index}>{item}</p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <ContactUsForm />
                    </Col>
                </Row>
            </Container>
            <div style={{ backgroundColor: "#fff", marginTop: "7.5rem"}}>
                <Container><ConsultationForm showForm={true} /></Container>
            </div>


            <Container><TrustedArea /></Container>
        </div>
    );
};

export default SingleProjectPage;