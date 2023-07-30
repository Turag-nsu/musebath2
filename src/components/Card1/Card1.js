import React from "react";
import "./Card1.css";
import cardImg1 from '../../Images/image-1663.png'
const Card1 = ({imageLink, title, text}) => {
  return (
    <div className="box">
      <div className="free-design-service-wrapper">
        <div className="free-design-service">
          <div className="overlap-group">
            <div className="rectangle" />
            <p className="re-bath-s-design">
              {text}
            </p>
            <div className="text-wrapper">{title}</div>
            <div className="group">
              <img className="image" alt="Image" src={imageLink} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card1;