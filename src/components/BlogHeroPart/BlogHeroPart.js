import React from 'react';
import './BlogHeroPart.css';
import { useLocation } from 'react-router-dom';
const BlogHeroPart = ({text, bg}) => {

    return (
        <div className="blog-hero-part" style={{backgroundImage: `url(${bg})`}}>
            <div className="blog-hero-text-area" data-aos="zoom-in" >
                <p>{text}</p>
                
            </div>
        </div>
    );
};

export default BlogHeroPart;