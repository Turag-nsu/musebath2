import React, { useEffect, useState } from 'react';
import './BlogHeroPart.css';
import overlayBtn from '../../Images/Service/estimate-btn.svg';
import overlayBoder from '../../Images/Service/estimate-btn-border.svg';
import ConsultationForm from './../ConsultationForm/ConsultationForm';

const BlogHeroPart = ({ text, bg }) => {
    const [showForm, setShowForm] = useState(false);
    const [bgImg, setBgImg] = useState(null);

    useEffect(() => {
        const bgImage = new Image();
        bgImage.src = bg;

        bgImage.onload = () => {
            setBgImg(bgImage);
        };
    }, [bg]);

    return (
        <>
            <div className="blog-hero-part" style={{ backgroundImage: `url(${bgImg ? bgImg.src : ''})` }}>
                <div className="blog-hero-overlay"></div>
                <div className="blog-hero-text-area" data-aos="zoom-in">
                    <p>{text}</p>
                </div>
                <div className='estimate-btn'>
                    <button onClick={() => setShowForm(true)}>
                        <div className='overlay-btn'>
                            <img src={overlayBtn} alt="" loading="lazy" />
                        </div>
                        <div className='overlay-btn-border'>
                            <img src={overlayBoder} alt="" loading="lazy" />
                        </div>
                        <div className='estimate-btn-text'>
                            <p className='free-text'>FREE</p>
                            <p className='estimate-text'>ESTIMATE</p>
                        </div>
                    </button>
                </div>
                {showForm && (
                    <div className='blog-hero-part-overlay'>
                        <ConsultationForm colCount={1} showForm={showForm} setShowForm={setShowForm} />
                    </div>
                )}
            </div>
        </>
    );
};

export default BlogHeroPart;
