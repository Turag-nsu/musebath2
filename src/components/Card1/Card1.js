import React from "react";
import "./Card1.css";
// import cardImg1 from '../../Images/image-1663.png'
const Card1 = ({imageLink, title, text, id}) => {
  return (
    <div className="box" data-aos="flip-up" data-aos-delay={200+id*100}>
      <div className="photo-container">
        <div className="photo-box">
        <img src={imageLink} alt="Image" className="photo" />
        </div>
      </div>

      <div className="title-text">
        <p>{title}</p>
      </div>
      <div className="body-text">
        <p>{text}</p>
      </div>
    </div>

  );
};
export default Card1;