import React from 'react';
import './ArticleAreaCard.css'
import ArticleAreaPic1 from '../../Images/Article-area-pic-1.png'
import calender_month from '../../Images/calendar_month.svg'
import arrow from '../../Images/arrow.svg'
import { Link } from 'react-router-dom';
const ArticleAreaCard = ({img, date, title, body,id}) => {
    return (
        <div className="ArticleAreaCardContainer card">
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
                    <p>{title}</p>
                </div>
                <div className="article-area-card-text">
                    <p>{body}</p>
                </div>
                
            </div>
            
            <div className="article-area-card-button">
                <Link to={`/blog/${id}`}>
                <button onClick={()=>{
                        
                    }} style={{border: "none", backgroundColor: "transparent"}}>Read More <img style={{width: "1.5rem",height: "0.5rem"}} src={arrow}></img></button>
                </Link>
                    
                </div>
        </div>
    );
};

export default ArticleAreaCard;