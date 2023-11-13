import React from 'react';
import './ArticleArea.css'
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import PageLoading from '../PageLoading/PageLoading';
import ArticleAreaCard from '../ArticleAreaCard/ArticleAreaCard';
import CustomButton from '../CustomButton/CustomButton';

const ArticleArea = () => {
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const fetchBlogs = async () => {
        const response = await axios.get(`https://musebath.onrender.com/api/blog-posts`);
        setData(response.data.slice(0, 3));
        if (response.status === 200) setIsLoading(false);
        else { setIsLoading(false) };
        console.log(response);
    }
    React.useEffect(() => {
        fetchBlogs();
        // console.log(data);
    }, []);
    if (isLoading) return <PageLoading />;
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
                                <ArticleAreaCard id={article.id} img={article.tileImage} date={article.uploadDate} title={article.title} body={article.mainBody} />
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