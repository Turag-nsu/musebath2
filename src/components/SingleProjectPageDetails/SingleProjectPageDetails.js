import React from 'react';
import ContactUsForm from '../ContactUsForm/ContactUsForm';

const SingleProjectPageDetails = ({project}) => {
    return (
        <div>
            <div className="single-projext-page-details-title">
                <p>Project Description</p>
            </div>
            <div className="single-projext-page-details-body">
                <p>{project.description}</p>
            </div>      
            <ContactUsForm />  
        </div>
    );
};

export default SingleProjectPageDetails;