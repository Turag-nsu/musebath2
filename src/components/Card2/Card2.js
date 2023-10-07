import React, { useState } from 'react';
import './Card2.css';

const Card2 = ({ imgLink, title, body, id }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    // const toggleBody = () => {
    //     console.log("kam hoche")
    //     setIsExpanded(!isExpanded);
    // };
    
    return (
        <div
            className='card2-container'
            data-aos="flip-left"
            data-aos-delay={200+id * 100}
            // onMouseOver={toggleBody}
            // onMouseLeave={toggleBody}
        >
            <div className="card2-img-container">
                <img className='card2-container-img' src={imgLink} alt={title} />
                <div className="card2-img-overlay">Click for details</div>
                <p className="card2-title">{title}</p>
            </div>
            {isExpanded&&(<div className='card2-body'>
                <p className="card2-body-title">{title}</p>
                <p className="card2-body-text">{body}</p>
                <a className='card2-body-link' href='#'>Learn More</a>
            </div>)}
        </div>
    );
};

export default Card2;
