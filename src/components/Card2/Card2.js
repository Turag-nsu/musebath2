import React, { useState } from 'react';
import './Card2.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Card2 = ({ imgLink, title, body, id }) => {
    const navigator = useNavigate();
    return (
        <div
            className='card2-container'
            data-aos="flip-left"
            data-aos-offset="100" data-aos-duration="1000"
            data-aos-delay={200 + id * 300}
            onClick={() => {
                // navigator(`/services/${id}`);
                navigator(`/services/${title.toLowerCase().replace(/ /g, '-')}`);
            }}
        >
            <div

                className={`card2-img-container`}
            >
                <img className='card2-container-img' src={imgLink} alt={title} />
                <div className="card2-img-overlay">Click for details</div>
                <div
                    className={`card2-overley`}
                ></div>
                <p className="card2-title" style={{ width: "16.625rem" }}>{title}</p>
            </div>
            <div className='card2-body'>
                <p className="card2-body-title">{title}</p>
                <p className="card2-body-text">{body}</p>
            </div>
        </div>
    );
};

export default Card2;
