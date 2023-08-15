import React from 'react';
// import CustomButton from '../CustomButton/CustomButton';
import line from '../../Images/Line.svg';
import callMade from '../../Images/call_made.svg';
import './CustomTextInput.css';

const CustomTextInput = () => {
  return (
    <div className="formArea" data-aos="fade-right">
        <p className="form-header">Free Design Consultation</p>
      <div className='custom-text-input'>
        <input type="text" placeholder="Name" />
        <img src={line} alt="Line" className="input-line" />
        <input type="text" placeholder="Phone" />
        <img src={line} alt="Line" className="input-line" />
        <input type="text" placeholder="Email" />
        <img src={line} alt="Line" className="input-line" />
        <input type="text" placeholder="ZIP Code" />
        <button className="btn-for-input">
            <p className='mobile-consultation'>Free consultation</p>
            <img src={callMade} alt="Call Made" />
        </button>
      </div>
    </div>
  );
};

export default CustomTextInput;
