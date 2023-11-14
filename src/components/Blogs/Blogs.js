import React from "react";
import "./Blogs.css";
import { Container, Row, Col } from "react-bootstrap";
import ArticleAreaCard from "../ArticleAreaCard/ArticleAreaCard";
import CustomButton from "../CustomButton/CustomButton";

import axios from "axios";
import PageLoading from "../PageLoading/PageLoading";


const Blogs = () => {
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [showData, setShowData] = React.useState([]);
    const linitOfData = 12;
    const fetchBlogs = async () => {
        const response = await axios.get(`https://musebath.onrender.com/api/blog-posts`);
        setData(response.data);
        setShowData(data.slice(0, linitOfData));
        if (response.status === 200) setIsLoading(false);
        else { setIsLoading(false) };
    }
    React.useEffect(() => {
        fetchBlogs();
        
        // console.log(data);
    }, []);
    if (isLoading) return <PageLoading />;
    return (
        <div className='Blogs-area'>
            <Container>
                <div className="Blogs-cards">
                    <Row md={3} xs={1} >
                        {showData.map(article => (
                            <div className="blogs-row">
                                <Col key={article.id}>
                                    <ArticleAreaCard img={article.tileImage} date={article.uploadDate} title={article.title} body={article.mainBody} id={article.id} />
                                </Col>
                            </div>
                        ))
                        }
                    </Row>
                </div>
                {data.length>linitOfData&&<div className="Blogs-area-btn">
                    <CustomButton
                        onClick={() => {
                            console.log(showData.length);
                            setShowData(data.slice(0, showData.length + linitOfData));
                        }}
                    text='View More' />
                </div>}
            </Container>
        </div>
    );
}
export default Blogs;
