import React from "react";
import "./Card1.css";
// import cardImg1 from '../../Images/image-1663.png'
const Card1 = ({imageLink, title, text, id}) => {
  return (
    <div className="box" data-aos="flip-up" data-aos-offset="100" data-aos-duration="1000" data-aos-delay={200+id*300}>
      <div className="photo-container">
        <div className="photo-box">
        <img
         loading="lazy"
         decoding="async"
        src={imageLink} alt={title}/>
        </div>
      </div>

      <div className="title-text">
        <p>{title}</p>
      </div>
      <div className="body-text" >
        <p>{text}</p>
      </div>
    </div>

  );
};
export default Card1;