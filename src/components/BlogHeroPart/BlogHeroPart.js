import React from 'react';
import './BlogHeroPart.css';
import { useLocation } from 'react-router-dom';
const BlogHeroPart = () => {

    return (
        <div className="blog-hero-part">
            <div className="container2" data-aos="zoom-in" >
                <p className="blog-hero-text" >Our Blogs</p>
            </div>
        </div>
    );
};

export default BlogHeroPart;