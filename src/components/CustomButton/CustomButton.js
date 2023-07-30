import React from 'react';
import './CustomButton.css';
const CustomButton = ({text}) => {
    return (
        <div>
            <button className="customBtn">{text}</button>
        </div>
    );
};

export default CustomButton;