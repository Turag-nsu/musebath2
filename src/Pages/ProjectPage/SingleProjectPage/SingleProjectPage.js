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
import { Helmet } from 'react-helmet';

const SingleProjectPage = () => {
    const [project, setProject] = React.useState();
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const { projectLink } = useParams();
    //Number(blogLink.slice(blogLink.length - 5))
    const projectID = Number(projectLink.slice(projectLink.length - 5));
    const fetchProject = async () => {

        try {
            const response = await axios.get(`https://musebath.onrender.com/api/project-posts/${projectID}`);
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
    if (error) return <ErrorPage text="Project not found" />
    if (isLoading) return <PageLoading />
    const metaLink = `https://musebath.com/project/${projectLink}`;
    const allDescription = project.description.map((item) => item).join(' ');
    const metaDescription = allDescription.slice(0, 150);
    return (
        <div style={{ overflow: 'hidden' }} className='single-project-page-container'>
            <Helmet>
                <link rel="canonical" href={metaLink} />
                <title>{project.title} | Musebath</title>
                <meta name="description" content={metaDescription} />
                <meta name="keywords" content={project.keywords} />
                <meta name="author" content="Musebath" />
                {/* links */}
                <meta name='url' content={metaLink} />
                <meta name='identifier-URL' content={metaLink} />
                <meta property="og:title" content={project.title} />
                <meta property="og:description" content={metaDescription} />
                {/* <meta property="og:image" content={project.images[0].img} /> */}
                <meta property="og:url" content={metaLink} />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="Musebath" />

            </Helmet>
            <Container>
                <div className="single-project-header">
                    <p className='title'>{project.title}</p>
                    <p className='subtitle'>{project.subtitle}</p>
                </div>
            </Container>
            <ImageSlider images={project.images} />
            <Container>
                <Row>
                    <Col lg={8} md={12}>
                        <div className='single-projext-page-details-container'>
                            <div className="single-projext-page-details-title">
                                <p>Project Description</p>
                            </div>
                            <div className="single-projext-page-details-body" >
                                {
                                    project.description.map((item, index) => {

                                        return (
                                            <p style={{ whiteSpace: "pre-wrap" }} key={index}>{item}</p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Col>
                    <Col className='project-contact-us'>
                        <ContactUsForm />
                    </Col>
                </Row>
            </Container>
            <div className='project-consultation-form'>
                <Container><ConsultationForm showForm={true} /></Container>
            </div>


            <Container><TrustedArea /></Container>
        </div>
    );
};

export default SingleProjectPage;