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
        // console.log(response);
    }
    React.useEffect(() => {
        fetchBlogs();
        // console.log(data);
    }, []);
    if (isLoading) return <PageLoading />;
    return (
        <div className='article-area'>
            <Container>
                <article>
                <h1 className='article-area-title'
                    data-aos="zoom-in"
                    data-aos-delay={200}
                    data-aos-duration="1000"
                    data-aos-ofset="200"
                >
                    Tips for a Successful Bathroom Remodel
                </h1>
                </article>
                
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
                <div className="article-area-btn"
                    data-aos="zoom-in"
                    data-aos-delay={200}
                    data-aos-duration="1000"
                    data-aos-ofset="200"
                >
                    <a href='/blog'>
                        <CustomButton text='View All Article' />
                    </a>
                </div>
            </Container>
        </div>
    );
};

export default ArticleArea;