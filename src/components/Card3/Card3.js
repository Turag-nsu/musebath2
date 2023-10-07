import React from 'react';
import './Card3.css';
const Card3 = ({ id, imgLink, title }) => {
    return (
        <div className="card3-container"
            data-aos="flip-left"
            data-aos-delay={200 + id * 100}
        >
            <div className="card3-top">
                <div className="card3-number">
                    <p>{id}</p>
                </div>
            </div>
            <div className="img-container">
                <img src={imgLink} alt="" />
            </div>
            <div className="card3-title">
                <p>{title}</p>
            </div>
        </div>
    );
};

export default Card3;