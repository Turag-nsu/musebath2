import React, { useState } from 'react';
import './Card2.css';

const Card2 = ({ imgLink, title, body, id }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    let hoverTimeout; // Add a variable to store the timeout

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    const handleMouseOver = () => {
        console.log("Mouse over");
        // Clear the timeout if the mouse re-enters
        clearTimeout(hoverTimeout);
        if (!isExpanded) {
            hoverTimeout = setTimeout(() => setIsExpanded(true), 300); // Delay the expansion
        }
        if (isExpanded) {
            // hoverTimeout = setTimeout(() => setIsExpanded(true), 100);
        }
    };

    const handleMouseOut = () => {
        console.log("Mouse out");
        // Clear the timeout when the mouse leaves
        clearTimeout(hoverTimeout);
        if (isExpanded) {
            setIsExpanded(false);
        }
    };

    return (
        <div
            className='card2-container'
            data-aos="flip-left"
            data-aos-delay={200 + id * 100}
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
                <p className="card2-title">{title}</p>
            </div>
            {/* {isExpanded && ( */}
                <div className='card2-body'>
                    <p className="card2-body-title">{title}</p>
                    <p className="card2-body-text">{body}</p>
                    <a className='card2-body-link' href='#'>Learn More</a>
                </div>
            {/* )} */}
        </div>
    );
};

export default Card2;
