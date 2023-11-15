import React, { useState } from 'react';
import './Card2.css';
import { Link } from 'react-router-dom';

const Card2 = ({ imgLink, title, body, id }) => {

    return (
        <div
            className='card2-container'
            data-aos="flip-left"
            data-aos-offset="100" data-aos-duration="1000"
            data-aos-delay={200 + id * 300}
            // onMouseOver={handleMouseOver}
            // onMouseOut={handleMouseOut}
        >
            <div

                className={`card2-img-container`}
            >
                <img className='card2-container-img' src={imgLink} alt={title} />
                <div className="card2-img-overlay">Click for details</div>
                <div
                    className={`card2-overley`}
                ></div>
                <p className="card2-title" style={{width: "16.625rem"}}>{title}</p>
            </div>
            {/* {isExpanded && ( */}
                <div className='card2-body'>
                    <p className="card2-body-title">{title}</p>
                    <p className="card2-body-text">{body}</p>
                    <a className='card2-body-link'>
                        <Link to={`/services/${id}`}>Read More</Link>
                    </a>
                </div>
            {/* )} */}
        </div>
    );
};

export default Card2;
