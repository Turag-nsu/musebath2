import React from 'react';
import './SingleLocation.css';
import locationMarker from "../../../Images/Location-marker.png";
const SingleLocation = ({ name }) => {
    return (
        <div className='single-location-container'>
            <div>
                <img src={locationMarker} alt="" />
            </div>
            <div>
                <p className="single-location-text">{name}</p>
            </div>
        </div>
    );
};

export default SingleLocation;