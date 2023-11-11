import React from 'react';
import emailjs from '@emailjs/browser';
import line from '../../Images/Line.svg';
import callMade from '../../Images/call_made.svg';
//import bootstrap loader
import { Spinner } from 'react-bootstrap';
import './CustomTextInput.css';
// import { set } from 'mongoose';

const CustomTextInput = () => {
  const [isSubmiting, setIsSubmiting] = React.useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmiting(true);
    const name = document.querySelector('input[name="name"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const zip = document.querySelector('input[name="zip"]').value;
    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      from_zip: zip,
      message: 'Free Design Consultation',
      from_time: 'anytime',
    };
    // console.log(templateParams);
    //  emailjs.send("service_v5gzagl", "template_3nqje5k", templateParams , "Ru3OjwteMUPoUY34t")
    emailjs
      .send(
        'service_v5gzagl',
        'template_3nqje5k',
        templateParams,
        'Ru3OjwteMUPoUY34t'
      )
      .then(
        function (response) {
          setIsSubmiting(false);
          const wholeArea = document.querySelector('.formArea');
          wholeArea.style.opacity = '0';
          // wholeArea.style.pointerEvents = 'none';
          wholeArea.style.transition = 'all 1s ease-in-out';
          setTimeout(() => {
            wholeArea.style.display = 'none';
          }, 1000);
          document.querySelector('input[name="name"]').value = '';
          document.querySelector('input[name="phone"]').value = '';
          document.querySelector('input[name="email"]').value = '';
          document.querySelector('input[name="zip"]').value = '';

        },
        function (error) {
          console.log('FAILED...', error);
        }
      );
    // e.target.reset();
  };
  return (
    <div className="formArea" data-aos="fade-right">
        <p className="form-header">Free Design<br></br>Consultation</p>
      <div className='custom-text-input'>
        <input type="text" placeholder="Name" name='name'/>
        <img src={line} alt="Line" className="input-line" />
        <input type="text" placeholder="Phone" name='phone'/>
        <img src={line} alt="Line" className="input-line" />
        <input type="text" placeholder="Email" name='email' />
        <img src={line} alt="Line" className="input-line" />
        <input type="text" placeholder="ZIP Code" name='zip'/>
        <button 
        onClick={handleFormSubmit}
        className="btn-for-input">
          {isSubmiting &&
            <Spinner animation="border" variant="light" />}
            {!isSubmiting&&(
            <p className='mobile-consultation'>Free consultation</p>
            )}
            {!isSubmiting&&(
            <img src={callMade} alt="Call Made" className="call-made" />
            )}
        </button>
      </div>
    </div>
  );
};

export default CustomTextInput;
