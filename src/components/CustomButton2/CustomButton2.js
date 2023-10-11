import React from 'react';
import './CustomButton2.css';
const CustomButton2 = ({text, color}) => {
    return (
        <div>
            <button className="customBtn" style={{backgroundColor: color}}>{text}</button>
        </div>
    );
};

export default CustomButton2;