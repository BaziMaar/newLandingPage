import React, { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Constructing the mailto link with the email address and subject
    const mailtoLink = `mailto:support@bazimaargames.com?subject=Contact Request&body=${encodeURIComponent(email)}`;
    // Opening the user's email client with the pre-filled email
    window.location.href = mailtoLink;
  };

  return (
    <div id='contact'>
      <h3>Contact Us</h3>
      <form className='contact-form' onSubmit={handleSubmit}>
        <div className='contact-input'>
          <input type='email' placeholder='example@example.com' value={email} onChange={handleInputChange} />
          <button style={{backgroundColor:'#9d00ff',color:'white',boxShadow:10,borderRadius:20}}type='submit'>Contact</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;

