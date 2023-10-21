import React from 'react';
import './BlogHeroPart.css';
import { useLocation } from 'react-router-dom';
import overlayBtn from '../../Images/Service/estimate-btn.svg'
import overlayBoder from '../../Images/Service/estimate-btn-border.svg'
const BlogHeroPart = ({ text, bg }) => {

    return (
        <div className="blog-hero-part" style={{ backgroundImage: `url(${bg})` }}>
            <div className="blog-hero-text-area" data-aos="zoom-in" >
                <p>{text}</p>
            </div>
            <div className='estimate-btn'>
                <button>
                    <div className='overlay-btn'>
                        <img src={overlayBtn} alt="" />
                    </div>
                    <div className='overlay-btn-border'>
                        <img src={overlayBoder} alt="" />
                    </div>
                    <div className='estimate-btn-text'>
                        <p className='free-text'>FREE</p>
                        <p className='estimate-text'>ESTIMATE</p>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default BlogHeroPart;