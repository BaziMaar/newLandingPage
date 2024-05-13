import React from 'react';
import Navbar from './Navbar';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
      }}>
        <h1 style={{ color: '#9d00ff' }}>About Us</h1>

        <p>
          Welcome To Bazi Maar Games. Bazi Maar Games is a Professional Gambling Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of Gambling, with a focus on dependability and Online Gaming. We're working to turn our passion for Gambling into a booming online website. We hope you enjoy our Gambling as much as we enjoy offering them to you.
          I will keep posting more important posts on my Website for all of you. Please give your support and love.
          Thanks For Visiting Our Site.
          Have a nice day!
        </p>
      </div>
    </>
  );
};

export default AboutUs;
