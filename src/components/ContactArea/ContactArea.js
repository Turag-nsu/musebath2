import React from 'react';
import './ContactArea.css';
import phoneIcon from '../../Images/Contact-us/Phone.svg';
import emailIcon from '../../Images/Contact-us/emailbox.svg';
import locationIcon from '../../Images/Contact-us/MapPin.svg';
import socialMediaIcon from '../../Images/Contact-us/social-media.svg';
import line from '../../Images/Contact-us/Line.svg';
import fbLogo from '../../Images/facebook-logo.png';
import instaLogo from '../../Images/instragram-logo.png';

const ContactArea = () => {
    return (
        <div className='contact-area'>
            <div
                data-aos="fade-right"
                data-aos-delay={200}
                data-aos-duration="1000"
                data-aos-ofset="200"
                data-aos-anchor-placement="top-center"
                className='get-in-touch'>
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
            <div
                data-aos="zoom-in"
                data-aos-delay={200}
                data-aos-duration="1000"
                data-aos-ofset="200"
                data-aos-anchor-placement="top-center"
                className='divide-line'>
                <img src={line} alt="" />
            </div>
            <div
                data-aos="fade-left"
                data-aos-delay={200}
                data-aos-duration="1000"
                data-aos-ofset="200"
                data-aos-anchor-placement="top-center"
                className='social-media-area'>
                <p className='social-media-title'>Social Media</p>
                <p className='social-media-sub-title'>Follow us on Social Media for Updates, News, and Insights</p>
                <div className='social-media-icons'>
                    <div className="social-logo">
                        <a href="https://www.facebook.com/musebath.us/" target="_blank" >
                            <img style={{ border: "1px solid gray" }} src={fbLogo} alt="" />
                        </a>
                        <img style={{ border: "1px solid gray" }} src={instaLogo} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ContactArea;
