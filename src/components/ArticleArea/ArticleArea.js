import React from 'react';
import './ArticleArea.css'
import { Col, Container, Row } from 'react-bootstrap';
import ArticleImage1 from '../../Images/Article-area-pic-1.png'
import ArticleImage2 from '../../Images/Article-area-pic-2.png'
import ArticleImage3 from '../../Images/Article-area-pic-3.jpeg'
import ArticleAreaCard from '../ArticleAreaCard/ArticleAreaCard';
import CustomButton from '../CustomButton/CustomButton';
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
const ArticleArea = () => {

    return (
        <div className='article-area'>
            <Container>
                <p className='article-area-title'>
                    Tips for a Successful Bathroom Remodel
                </p>
                <div className="article-cards">
                    <Row className='card-group'>
                        {data.map(article => (

                            <Col key={article.id} md={4} xs={12}>
                                <ArticleAreaCard id={article.id} img={article.img} date={article.date} title={article.title} body={article.body} />
                            </Col>
                        ))
                        }
                    </Row>
                </div>
                <div className="article-area-btn">
                <CustomButton text='View All Article'/>
                </div>
            </Container>
        </div>
    );
};

export default ArticleArea;