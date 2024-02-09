import React from 'react';

import './ErrorPage.css'
import ConsultationForm from '../ConsultationForm/ConsultationForm';
import { Helmet } from 'react-helmet';
const ErrorPage = ({ text }) => {

    return (
        <>
            <Helmet>
                <title>404 | Page not found</title>
                <meta name="description" content="404 | Page not found" />
            </Helmet>
            <div className='error-page-container'>
                <p className='error-text'>404</p>
                <p className='error-text'>{text}</p>
                {/* <div style={{height: "100vh", width: "100%"}}> */}
                <ConsultationForm showForm={true} />
                {/* </div> */}
            </div>
        </>
    );
};

export default ErrorPage;