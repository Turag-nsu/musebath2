import React from 'react';
import './ErrorPage.css'
import ConsultationForm from '../ConsultationForm/ConsultationForm';

const ErrorPage = ({text}) => {
    // const consultationFormHeight = document.getElementById('consultation-form')?.clientHeight;
    return (
        <div className='error-page-container'>
            <p className='error-text'>404</p>
            <p className='error-text'>{text}</p>
            {/* <div style={{height: "100vh", width: "100%"}}> */}
                <ConsultationForm showForm={true} />
            {/* </div> */}

        </div>
    );
};

export default ErrorPage;