import React from 'react';
import Navbar from './Navbar';

const ContactUs = () => {
  return (
    <>
    <Navbar/>
    <div style={{ backgroundColor: 'black', color: 'white', padding: '20px',alignItems:'center',justifyContent:'center',marginTop:30 }}>
      <h1 style={{color:'#9d00ff'}}>Contact Us!</h1>

          <p>
            Welcome To Bazi Maar Games!
            <br/>
            If you have any questions about the site,advertising or anything else
            <p style={{color:'#9d00ff'}}>
          
          <br />
          E-mail: support@bazimaargames.com
        </p>
        <h1>We will reverting you as soon as possible</h1>
        <p>Thank you for contacting us</p>
        </p>
      </div>
    </>
  );
};

export default ContactUs;