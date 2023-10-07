import React from 'react';
import './CustomButton.css';
const CustomButton = ({text, color}) => {
    return (
        <div>
            <button className="customBtn" style={{backgroundColor: color}}>{text}</button>
        </div>
    );
};

export default CustomButton;