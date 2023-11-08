import React from 'react';

const MyMap = () => {
  return (
    // <div className="custom-map">
      <iframe
        title='map'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.771869952227!2d-90.3182611!3d38.6311289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8ca95530f59a5%3A0xe041703204b50c6f!2s7477%20Wise%20Ave%2C%20Richmond%20Heights%2C%20MO%2063117%2C%20USA!5e0!3m2!1sen!2sbd!4v1698244296176!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    // </div>
  );
};

export default MyMap;
