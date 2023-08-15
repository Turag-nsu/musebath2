import React from 'react';
import './Card2.css';
import underline from '../../Images/underline.svg';
const Card2 = ({ imgLink, title, body, id }) => {
    return (
        <div className="card2-container" data-aos="flip-left" data-aos-delay={id*100}>
            <div className="card2-img-container">
                <img className='card2-container-img' src={imgLink} alt={title} />
                <div className="card2-img-overlay">Click for details</div>
                <p className="card2-title">{title}</p>
            </div>
            <div className="card2-body">
                <p className="card2-body-title">{title}</p>
                <p className="card2-body-text">{body}</p>
                <a className='card2-body-link' href='#'>Learn More</a>
            </div>
            {/* <img src={underline} alt="Underline" className="card2-body-underline" /> */}
        </div>

    );
};

export default Card2;