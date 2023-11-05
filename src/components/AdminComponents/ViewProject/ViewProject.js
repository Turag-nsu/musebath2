import React, { useEffect } from 'react';
// import { handleGetPost } from '../../../services/blogServices';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
// import { handleGetPosts } from '../../../services/blogServices';
import {handleGetProjects, handleDeletePost } from '../../../services/projectServices';

const ViewProject = () => {
    const [posts, setPosts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await handleGetProjects();
            setPosts(data);
            setLoading(false);
        };
        fetchData();
    }, []);
    const adminCard = document.querySelector('.admin-blog-card');
    const handleDeletePost = async (id) => {
        const { data } = await handleDeletePost(id);
        // console.log(data);
    }
    if (loading) return <div>Loading...</div>;
    return (
        <div>
            <Container>
                {posts.map((post, index) => {
                    return (
                        <div key={index} className='admin-blog-card'>
                            <Row>
                                <Col xs={6} md={3}>
                                    <div className='admin-blog-card-image'>
                                        <img src={post.images[0]} alt='' />
                                    </div>
                                </Col>
                                <Col xs={6} md={7}>
                                    <div className='admin-blog-card-title'>
                                        <p>{post.title}</p>
                                    </div>
                                    <div className='admin-blog-card-body'>
                                        <p>{post.description.slice(0, 30)}</p>
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
                                                adminCard.style.opacity = 0;
                                                setTimeout(() => {
                                                    // window.location.reload();
                                                }, 1000);
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
}

export default ViewProject;