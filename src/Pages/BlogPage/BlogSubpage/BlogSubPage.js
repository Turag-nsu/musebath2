import React, { useEffect } from 'react';
import './BlogSubPage.css'
import { Container, Row, Col } from 'react-bootstrap';
// import blogData from '../../../Database/Data'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import callMade2 from '../../../Images/call-made2.svg'
import callMade3 from '../../../Images/call-made3.svg'

import ArticleImage1 from '../../../Images/Article-area-pic-1.png'
import ArticleImage2 from '../../../Images/Article-area-pic-2.png'
import ArticleImage3 from '../../../Images/Article-area-pic-3.jpeg'
import ArticleAreaCard from '../../../components/ArticleAreaCard/ArticleAreaCard';
import ConsultationForm from '../../../components/ConsultationForm/ConsultationForm';
import TrustedArea from '../../../components/TrustedArea/TrustedArea';
import ContactUsForm from '../../../components/ContactUsForm/ContactUsForm';
import axios from 'axios';
import PageLoading from '../../../components/PageLoading/PageLoading';
import ErrorPage from '../../../components/ErrorPage/ErrorPage';
// import { set } from 'mongoose';


const BlogSubPage = () => {
    const {blogID} = useParams();
    const [blogID2, setBlogID2] = useState(blogID);
    const [blogData, setBlogData] = useState([]);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    
    const fetchBlogData = async () => {
        setBlogID2(blogID);
        try {
            const response = await axios.get(`https://musebath.onrender.com/api/blog-posts/${blogID}`);
            // console.log(response);
            if (response.status !== 200) {
                throw new Error('Failed to fetch blog data');
            } else {
                setBlogData(response.data);
                // console.log(response.status);
                setIsLoading(false);
            }
            
        } catch (error) {
            setError(true);
            setIsLoading(false);
            // return <ErrorPage />;
        }
    };
    const fetchRelatedBlogs = async () => {
        try {
            const response2 = await axios.get(`https://musebath.onrender.com/api/blog-posts`);
            const data = response2.data;
            const shuffledData = data.sort(() => Math.random() - 0.5);
            setData(shuffledData.splice(0, 3));
            setIsLoading(false);
        } catch (error) {
            setError(true);
            setIsLoading(false);
            // return <ErrorPage />;
        }
    };
    if (blogID2 !== blogID) {
        setIsLoading(true);
        fetchBlogData();
        fetchRelatedBlogs();
    }
    useEffect(() => {
        fetchBlogData();
        fetchRelatedBlogs();
        const interval = setInterval(() => {
            handleNextClick();
        }, 15000); // fetch related blogs every minute
        window.scrollTo(0, 0);
        return () => clearInterval(interval);
    },[]);

    if (error) {
        return <ErrorPage text = "Blog not found"/>;
    }
    

    const { title, tileImage, uploaderName, uploadDate, category, mainBody, bodyParts } = blogData;
    const handleNextClick = async () => {
        
        const relatedBlogCards = document.querySelector('.related-blog-card-group');
        relatedBlogCards.style.transform = 'translateX(-100%)';
        relatedBlogCards.style.opacity = '0';
        relatedBlogCards.style.transition = 'all 0.5s ease-in-out';
        fetchRelatedBlogs()
        setTimeout(() => {
            
        }, 500);
        setTimeout(() => {
            
            relatedBlogCards.style.transform = 'translateX(0%)';
            relatedBlogCards.style.opacity = '1';
            relatedBlogCards.style.transition = 'opacity 0.5s ease-in-out';

        }, 500);
        // const firstCard = data.shift();
        // data.push(firstCard);
        

    }
    const handlePrevClick = async () => {
        
        const relatedBlogCards = document.querySelector('.related-blog-card-group');
        relatedBlogCards.style.transform = 'translateX(100%)';
        relatedBlogCards.style.opacity = '0';
        relatedBlogCards.style.transition = 'all 0.5s ease-in-out';
        fetchRelatedBlogs()
        setTimeout(() => {
            
        }, 500);
        setTimeout(() => {
            
            relatedBlogCards.style.transform = 'translateX(0%)';
            relatedBlogCards.style.opacity = '1';
            relatedBlogCards.style.transition = 'opacity 0.5s ease-in-out';

        }, 500);
        // const lastCard = data.pop();
        // data.unshift(lastCard);

    }
    if (isLoading) {
        return (
            <div>
                <PageLoading />
            </div>
        )
    }
    // console.log("data is: ",data);
    return (
        <div>
            <Container>
                <Row style={{ position: "relative", overflow: "hidden" }}>
                    <Col lg={8} xs={12} className='blog-area-col'>
                        <div className='blog-full-area'>

                            <div className='blog-title-area'>
                                <p>{title}</p>
                            </div>

                            <div className='blog-title-img'>
                                <img src={tileImage} alt='blog-img' />
                            </div>
                            <div className='upload-details'>
                                <p className='blog-uploader-name-date'>{`By ${uploaderName} ${uploadDate}`}</p>
                                {/* <p className='blog-upload-date'>{uploadDate}</p> */}
                                <p className='blog-category'>{`Category: ${category}`}</p>
                            </div>
                            <p className='blog-main-body'>{mainBody}</p>
                            {
                                bodyParts.map(content => {
                                    return (
                                        <div className='blog-content-area'>
                                            <p className='blog-content-title'>{content.title}</p>
                                            <p className='blog-content-body'>{content.content}</p>
                                            {
                                                content.listItems ? (
                                                    <div className='blog-content-list'>
                                                        <ol>
                                                            {
                                                                content.listItems.map(listItem => <li>{listItem}</li>)
                                                            }
                                                        </ol>
                                                    </div>
                                                ) : null
                                            }
                                            {
                                                content.image ? (
                                                    <div className='blog-content-pic'>
                                                        <img src={content.image} alt='blog-img' />
                                                    </div>
                                                ) : null
                                            }
                                            {
                                                content.subBody ? (
                                                    <p className='blog-content-sub-body'>{content.subBody}</p>
                                                ) : null
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='blog-tag-area'>
                            <p>Tag: </p>
                            <button>Full Bathroom remodeling</button>
                            <button>Bathtub-shower conversions</button>
                            <button>Senior friendly bathroom</button>
                        </div>
                    </Col>
                    <Col xs={4} style={{paddingLeft:"0.3rem"}}>
                        <div className='blog-contact-us-form'>
                            <ContactUsForm />
                        </div>
                    </Col>
                </Row>
                <div className='related-blog-title-btn'>
                    <p className='related-blog-area-title'>Related articles</p>
                    <div className='testimonial-area-title-buttons'>
                        <button
                        onClick={handlePrevClick}
                        style={{ border: 'none' }}>
                            <div className="testimonial-prev-button">
                                <img src={callMade3} alt="" />
                            </div>
                        </button>
                        <button 
                        onClick={handleNextClick}
                        style={{ border: 'none' }}>
                            <div className="testimonial-next-button">
                                <img src={callMade2} alt="" />

                            </div>
                        </button>
                    </div>
                </div>
                <div className="related-blog-cards">
                    <Row className='related-blog-card-group'>
                        {data.map(article => (
                            <Col key={article.id} md={4} xs={12}>
                                {/* <ArticleAreaCard */}
                                <ArticleAreaCard img={article.tileImage} date={article.uploadDate} title={article.title} body={article.mainBody} id={article.id} />
                            </Col>
                        ))
                        }
                    </Row>
                </div>
            </Container>
            <div className='blog-consultation-form'>
                {/* <ConsultationForm */}
                <ConsultationForm showForm={true} />
            </div>
            <div className='blog-trusted-area'>
                {/* <TrustedArea */}
                <TrustedArea />
            </div>
        </div>
    );
}

export default BlogSubPage;