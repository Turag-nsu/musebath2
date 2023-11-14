import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { handleGetPosts } from '../../../services/blogServices';
import './ViewPosts.css';
import { handleDeletePost } from '../../../services/blogServices';
import { Link } from 'react-router-dom';
import PageLoading from '../../PageLoading/PageLoading';

const ViewPosts = () => {
    const [posts, setPosts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await handleGetPosts();
            setLoading(false);
            setPosts(data);
        };
        fetchData();
    }, []);


    const adminCard = document.querySelector('.admin-blog-card');
    if (loading) return <PageLoading />;
    return (
        <div>
            <Container>
                {posts.map((post, index) => {
                    return (
                        <div key={index} className='admin-blog-card'>
                            <Row>
                                <Col xs={6} md={3}>
                                    <div className='admin-blog-card-image'>
                                        <img src={post.tileImage} alt='' />
                                    </div>
                                </Col>
                                <Col xs={6} md={7}>
                                    <div className='admin-blog-card-title'>
                                        <p>{post.title}</p>
                                    </div>
                                    <div className='admin-blog-card-body'>
                                        <p>{post.mainBody.slice(0, 30)}</p>
                                    </div>
                                </Col>
                                <Col xs={12} md={2}>
                                    <div className='admin-blog-card-button'>
                                        <Link to={`/blog/${post.id}`}>
                                            <button style={{ backgroundColor: 'green' }}>View</button>
                                        </Link>
                                    </div>
                                    <div className='admin-blog-card-button'>
                                        <button style={{ backgroundColor: 'orange' }}>Edit</button>
                                    </div>
                                    <div className='admin-blog-card-button'>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                //ask for confirmation
                                                if (!window.confirm(`Are you sure you want to delete ${post.title}?\nThis can not be undone`))
                                                    return;
                                                handleDeletePost(post.id);
                                                // adminCard.style.opacity = 0;
                                                setTimeout(() => {
                                                    window.location.reload();
                                                }, 2000);
                                            }}
                                            style={{ backgroundColor: 'red' }}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    );
                })}
            </Container>
        </div>
    );
};

export default ViewPosts;