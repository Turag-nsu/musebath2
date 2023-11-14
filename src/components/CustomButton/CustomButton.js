import React from 'react';
import './CustomButton.css';
const CustomButton = ({text, color, onClick}) => {
    return (
        <div>
            <button onClick={onClick} className="customBtn" style={{backgroundColor: color}}>{text}</button>
        </div>
    );
};

export default CustomButton;