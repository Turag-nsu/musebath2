import React from 'react';
import './ArticleAreaCard.css'
import calender_month from '../../Images/calendar_month.svg'
import arrow from '../../Images/arrow.svg'
import { Link } from 'react-router-dom';
const ArticleAreaCard = ({ img, date, title, body, id }) => {
    const linkGenerator = (title, id) => {
        // if link has ? mark then remove it
        if (title.includes('?')) {
            title = title.replace('?', '');
        }
        const link = title.toLowerCase().replace(/ /g, '-');
        const linkId = id.toString();
        const linkIdLength = linkId.length;
        const linkIdLengthDifference = 5 - linkIdLength;
        let linkIdString = '';
        for (let i = 0; i < linkIdLengthDifference; i++) {
            linkIdString += '0';
        }
        linkIdString += linkId;
        return `${link}-${linkIdString}`;
    }
    return (
        <div className="ArticleAreaCardContainer card"
            data-aos="flip-up"
            data-aos-delay={200 + id * 200}
            data-aos-duration="1000"
            data-aos-ofset="200"
        >
            <Link to={`/blog/${linkGenerator(title, id)}`} >
                <div className="article-area-top">
                    <div className="article-area-pic-container">
                        <img
                         loading="lazy"
                         decoding="async"
                        src={img} alt="" />
                    </div>
                    <div className="article-area-date">
                        <div>
                            <img
                             loading="lazy"
                             decoding="async"
                            src={calender_month} alt="" />
                        </div>
                        <div className="article-area-date-text">
                            <p className=''>{date}</p>
                        </div>
                    </div>
                </div>
                <div className="article-area-card-body ">
                    <article>
                        <div className="article-area-card-title">
                            <h1>{title.slice(0, 60)}</h1>
                        </div>
                        <div className="article-area-card-text">
                            <p>{body.slice(0, 100)}</p>
                        </div>
                    </article>


                </div>

                <div className="article-area-card-button">
                    <button onClick={() => {
                        window.scrollTo(0, 0);

                    }} style={{ border: "none", backgroundColor: "transparent" }}>
                        Read More
                        <img
                         loading="lazy"
                         decoding="async"
                        style={{ width: "1.5rem", height: "0.5rem" }} alt='click to read more' src={arrow} />
                    </button>

                </div>
            </Link>
        </div>
    );
};

export default ArticleAreaCard;