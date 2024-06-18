import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ThankyouScreen.css'; // Import the CSS file

const ThankYouScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Redirect to home page after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="thank-you-container">
      <h1 className="thank-you-message">Thank You for Logging In!</h1>
      <p className="download-message">Your app is downloading on your phone...</p>
    </div>
  );
};

export default ThankYouScreen;
