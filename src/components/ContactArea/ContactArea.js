import React from 'react';
import './ContactArea.css';
import phoneIcon from '../../Images/Contact-us/Phone.svg';
import emailIcon from '../../Images/Contact-us/emailbox.svg';
import locationIcon from '../../Images/Contact-us/MapPin.svg';
import socialMediaIcon from '../../Images/Contact-us/social-media.svg';
import line from '../../Images/Contact-us/Line.svg';

const ContactArea = () => {
    return (
        <div className='contact-area'>
            <div className='get-in-touch'>
                <p className='get-in-touch-title'>Get in Touch</p>
                <div className='get-in-touch-content'>
                    <div className='phone-area'>
                        <img src={phoneIcon} alt="" />
                        <p className='phone-number'>314-408-2708</p>
                    </div>
                    <div className='mail-area'>
                        <img src={emailIcon} alt="" />
                        <p className='mail-id'>info@musebath.us</p>
                    </div>
                    <div className='location-area'>
                        <img src={locationIcon} alt="" />
                        <p className='location'>7477 Wise Avenue<br />Richmond Heights, MO 63117</p>
                    </div>
                </div>
            </div>
            <div className='divide-line'>
                <img src={line} alt="" />
            </div>
            <div className='social-media-area'>
                <p className='social-media-title'>Social Media</p>
                <p className='social-media-sub-title'>Follow us on Social Media for Updates, News, and Insights</p>
                <div className='social-media-icons'>
                    <img src={socialMediaIcon} alt="" />

                </div>
            </div>
        </div>
    );
}

export default ContactArea;
