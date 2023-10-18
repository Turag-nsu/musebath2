import React from "react";
import "./Blogs.css";
import { Container, Row, Col } from "react-bootstrap";
import ArticleAreaCard from "../ArticleAreaCard/ArticleAreaCard";
import CustomButton from "../CustomButton/CustomButton";
import Blog_pic_1 from "../../Images/Blog/Blog_pic_1.png";
import Blog_pic_2 from "../../Images/Blog/Blog_pic_2.png";
import Blog_pic_3 from "../../Images/Blog/Blog_pic_3.png";
import Blog_pic_4 from "../../Images/Blog/Blog_pic_4.png";
import Blog_pic_5 from "../../Images/Blog/Blog_pic_5.png";
import Blog_pic_6 from "../../Images/Blog/Blog_pic_6.png";
import Blog_pic_7 from "../../Images/Blog/Blog_pic_7.png";
import Blog_pic_8 from "../../Images/Blog/Blog_pic_8.png";
import Blog_pic_9 from "../../Images/Blog/Blog_pic_9.png";
import Blog_pic_10 from "../../Images/Blog/Blog_pic_10.png";
import Blog_pic_11 from "../../Images/Blog/Blog_pic_11.png";
import Blog_pic_12 from "../../Images/Blog/Blog_pic_12.png";
// import blogg from '../../Images/Article-area-pic-1.png'
const data = [
    {
        id: 1,
        img: Blog_pic_1,
        title: "Elevate Your Space: Top Bathroom Remodeling Trends",
        body: "Transform your bathroom into a stylish and functional haven with the latest remodeling trends...",
        date: "12 July, 2023",
    },
    {
        id: 2,
        img: Blog_pic_2,
        title: "Small Bathroom, Big Impact: Space-Saving Remodeling Ideas",
        body: "Don't let a small bathroom limit your creativity! Explore ingenious space-saving ideas that maximize your...",
        date: "12 July, 2023",
    },
    {
        id: 3,
        img: Blog_pic_3,
        title: "A Step-by-Step Guide to Planning Your Dream Bathroom Remodel",
        body: "Embark on your bathroom remodeling journey with confidence using our comprehensive step-by-step...",
        date: "12 July, 2023",
    },
    {
        id: 4,
        img: Blog_pic_4,
        title: "Small Bathroom, Big Impact: Space-Saving Remodeling Ideas",
        body: "Don't let a small bathroom limit your creativity! Explore ingenious space-saving ideas that maximize your...",
        date: "12 July, 2023",
    },
    {
        id: 5,
        img: Blog_pic_5,
        title: "Small Bathroom, Big Impact: Space-Saving Remodeling Ideas",
        body: "Don't let a small bathroom limit your creativity! Explore ingenious space-saving ideas that maximize your...",
        date: "12 July, 2023",
    },
    {
        id: 6,
        img: Blog_pic_6,
        title: "Small Bathroom, Big Impact: Space-Saving Remodeling Ideas",
        body: "Don't let a small bathroom limit your creativity! Explore ingenious space-saving ideas that maximize your...",
        date: "12 July, 2023",
    },
    {
        id: 7,
        img: Blog_pic_7,
        title: "Small Bathroom, Big Impact: Space-Saving Remodeling Ideas",
        body: "Don't let a small bathroom limit your creativity! Explore ingenious space-saving ideas that maximize your...",
        date: "12 July, 2023",
    },
    {
        id: 8,
        img: Blog_pic_8,
        title: "Small Bathroom, Big Impact: Space-Saving Remodeling Ideas",
        body: "Don't let a small bathroom limit your creativity! Explore ingenious space-saving ideas that maximize your...",
        date: "12 July, 2023",
    },
    {
        id: 9,
        img: Blog_pic_9,
        title: "Small Bathroom, Big Impact: Space-Saving Remodeling Ideas",
        body: "Don't let a small bathroom limit your creativity! Explore ingenious space-saving ideas that maximize your...",
        date: "12 July, 2023",
    },
    {
        id: 10,
        img: Blog_pic_10,
        title: "Small Bathroom, Big Impact: Space-Saving Remodeling Ideas",
        body: "Don't let a small bathroom limit your creativity! Explore ingenious space-saving ideas that maximize your...",
        date: "12 July, 2023",
    },
    {
        id: 11,
        img: Blog_pic_11,
        title: "Small Bathroom, Big Impact: Space-Saving Remodeling Ideas",
        body: "Don't let a small bathroom limit your creativity! Explore ingenious space-saving ideas that maximize your...",
        date: "12 July, 2023",
    },
    {
        id: 12,
        img: Blog_pic_12,
        title: "Small Bathroom, Big Impact: Space-Saving Remodeling Ideas",
        body: "Don't let a small bathroom limit your creativity! Explore ingenious space-saving ideas that maximize your...",
        date: "12 July, 2023",
    },
]
const Blogs = () => {
    return (
        <div className='Blogs-area'>
            <Container>
                <div className="Blogs-cards">
                    <Row md={3} xs={1} >
                        {data.map(article => (
                            <div className="blogs-row">
                                <Col key={article.id}>
                                    <ArticleAreaCard img={article.img} date={article.date} title={article.title} body={article.body} />
                                </Col>
                            </div>
                        ))
                        }
                    </Row>
                </div>
                <div className="Blogs-area-btn">
                    <CustomButton text='View More' />
                </div>
            </Container>
        </div>
    );
}
export default Blogs;
