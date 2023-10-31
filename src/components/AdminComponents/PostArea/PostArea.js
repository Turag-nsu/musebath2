import React from 'react';
import './PostArea.css';
import { Nav } from 'react-bootstrap';
import { Link, BrowserRouter as Router } from 'react-router-dom'; // import BrowserRouter
import { Outlet } from 'react-router-dom';
import logoutImg from '../../../Images/logout.png';
const PostArea = () => {
    return (
        <div>
            {/* <Router> wrap the Routes component inside a Router component */}
            <div className="welcome-area">
                <div className="welcome-area-title">
                    <p>Welcome, Admin</p>
                </div>
                <div className="welcome-area-body">
                    <p>What would you like to do?</p>
                </div>
            </div>
            <div className="post-nav-container">
                <div className="post-nav-area">
                    <Nav fill variant="tabs" defaultActiveKey="/admin/blog-post">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/admin/blog-post">Blog Post</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/admin/project-post">Project Post</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
            <Outlet />
            <div className="log-out-container">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        localStorage.removeItem('user');
                        window.location.reload(false);
                    }}
                >
                    <img src={logoutImg} alt="logout" />
                </button>
            </div>
        </div>
    );
};

export default PostArea;