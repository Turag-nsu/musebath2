import React from 'react';
import './ArticleAreaCard.css'
import calender_month from '../../Images/calendar_month.svg'
import arrow from '../../Images/arrow.svg'
import { Link } from 'react-router-dom';
const ArticleAreaCard = ({ img, date, title, body, id }) => {
    // console.log(img)
    const linkGenerator = (title, id) => {
        const link = title.toLowerCase().replace(/ /g, '-');
        const linkId = id.toString();
        //the id will be 5 digits long. if it is less than 5 digits, add 0s to the front
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
            <div className="article-area-top">
                <div className="article-area-pic-container">
                    <img src={img} alt="" />
                </div>
                <div className="article-area-date">
                    <div>
                        <img src={calender_month} alt="" />
                    </div>
                    <div className="article-area-date-text">
                        <p className=''>{date}</p>
                    </div>
                </div>
            </div>
            <div className="article-area-card-body ">
                <div className="article-area-card-title">
                    <p>{title.slice(0, 60)}</p>
                </div>
                <div className="article-area-card-text">
                    <p>{body.slice(0, 100)}</p>
                </div>

            </div>

            <div className="article-area-card-button">
                <Link to={`/blog/${linkGenerator(title, id)}`}>
                    <button onClick={() => {
                        window.scrollTo(0, 0);

                    }} style={{ border: "none", backgroundColor: "transparent" }}>
                        Read More
                        <img style={{ width: "1.5rem", height: "0.5rem" }} alt='click to read more' src={arrow} />
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default ArticleAreaCard;