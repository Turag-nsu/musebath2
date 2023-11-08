import React from 'react';
import './BlogSubPage.css'
import { Container, Row, Col } from 'react-bootstrap';
import blogData from '../../../Database/Data'
import { useParams } from 'react-router-dom';

import callMade2 from '../../../Images/call-made2.svg'
import callMade3 from '../../../Images/call-made3.svg'

import ArticleImage1 from '../../../Images/Article-area-pic-1.png'
import ArticleImage2 from '../../../Images/Article-area-pic-2.png'
import ArticleImage3 from '../../../Images/Article-area-pic-3.jpeg'
import ArticleAreaCard from '../../../components/ArticleAreaCard/ArticleAreaCard';
import ConsultationForm from '../../../components/ConsultationForm/ConsultationForm';
import TrustedArea from '../../../components/TrustedArea/TrustedArea';
import ContactUsForm from '../../../components/ContactUsForm/ContactUsForm';

const data = [
    {
        id: 1,
        img: ArticleImage1,
        title: "Elevate Your Space: Top Bathroom Remodeling Trends",
        body: "Transform your bathroom into a stylish and functional haven with the latest remodeling trends...",
        date: "12 July, 2023",
    },
    {
        id: 2,
        img: ArticleImage2,
        title: "Small Bathroom, Big Impact: Space-Saving Remodeling Ideas",
        body: "Don't let a small bathroom limit your creativity! Explore ingenious space-saving ideas that maximize your...",
        date: "12 July, 2023",
    },
    {
        id: 3,
        img: ArticleImage3,
        title: "A Step-by-Step Guide to Planning Your Dream Bathroom Remodel",
        body: "Embark on your bathroom remodeling journey with confidence using our comprehensive step-by-step...",
        date: "12 July, 2023",
    }
]

const BlogSubPage = () => {
    const { id } = useParams();
    const { mainTitle, mainImage, uploaderName, uploadDate, category, mainBody, contents } = blogData[0].blog1;
    const handleNextClick = () => {
        const relatedBlogCards = document.querySelector('.related-blog-card-group');
        relatedBlogCards.style.transform = 'translateX(-100%)';
        relatedBlogCards.style.opacity = '0';
        relatedBlogCards.style.transition = 'all 0.5s ease-in-out';
        setTimeout(() => {
            relatedBlogCards.style.transform = 'translateX(0%)';
            relatedBlogCards.style.opacity = '1';
            relatedBlogCards.style.transition = 'opacity 0.5s ease-in-out';

        }, 500);
        const firstCard = data.shift();
        data.push(firstCard);
        

    }
    const handlePrevClick = () => {
        const relatedBlogCards = document.querySelector('.related-blog-card-group');
        relatedBlogCards.style.transform = 'translateX(100%)';
        relatedBlogCards.style.opacity = '0';
        relatedBlogCards.style.transition = 'all 0.5s ease-in-out';
        setTimeout(() => {
            relatedBlogCards.style.transform = 'translateX(0%)';
            relatedBlogCards.style.opacity = '1';
            relatedBlogCards.style.transition = 'opacity 0.5s ease-in-out';

        }, 500);
        const lastCard = data.pop();
        data.unshift(lastCard);

    }
    return (
        <div>
            <Container>
                <Row style={{ position: "relative", overflow: "hidden" }}>
                    <Col xs={8} className='blog-area-col'>
                        <div className='blog-full-area'>

                            <div className='blog-title-area'>
                                <p>{mainTitle}</p>
                            </div>

                            <div className='blog-title-img'>
                                <img src={mainImage} alt='blog-img' />
                            </div>
                            <div className='upload-details'>
                                <p className='blog-uploader-name-date'>{`By ${uploaderName} ${uploadDate}`}</p>
                                {/* <p className='blog-upload-date'>{uploadDate}</p> */}
                                <p className='blog-category'>{`Category: ${category}`}</p>
                            </div>
                            <p className='blog-main-body'>{mainBody}</p>
                            {
                                contents.map(content => {
                                    return (
                                        <div className='blog-content-area'>
                                            <p className='blog-content-title'>{content.title}</p>
                                            <p className='blog-content-body'>{content.body}</p>
                                            {
                                                content.list ? (
                                                    <div className='blog-content-list'>
                                                        <ol>
                                                            {
                                                                content.list.map(listItem => <li>{listItem}</li>)
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
                                <ArticleAreaCard img={article.img} date={article.date} title={article.title} body={article.body} />
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