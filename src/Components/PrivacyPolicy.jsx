import React from 'react';
import Navbar from './Navbar';

const PrivacyPolicy = () => {
  return (
    <>
    <Navbar/>
    <div style={{ backgroundColor: 'black', color: 'white', padding: '20px',alignItems:'center',justifyContent:'center',marginTop:30 }}>
      <h1 style={{color:'#9d00ff'}}>Privacy Policy</h1>
      <ol>
        <li>
          <strong>Collection of Personal Information</strong>
          <p>
            We collect personal information from you when you register for an account, make a deposit, withdraw funds, or contact our customer support team. This information may include your name, address, email address, phone number, and date of birth.
          </p>
        </li>
        <li>
          <strong>Use of Personal Information</strong>
          <p>
            We use your personal information to provide you with the services that you request, to verify your identity, to prevent fraud, and to improve our services. We may also use your personal information to send you marketing communications, but you can opt out of these communications at any time.
          </p>
        </li>
        <li>
          <strong>Sharing of Personal Information</strong>
          <p>
            We do not share your personal information with third parties except in the following limited circumstances:
          </p>
          <ul>
            <li>With third-party service providers who help us to provide our services, such as payment processors and data hosting providers.</li>
            <li>To comply with laws and regulations.</li>
            <li>To protect our rights or property.</li>
          </ul>
        </li>
        <li>
          <strong>Data Security</strong>
          <p>
            We take reasonable measures to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure. Therefore, we cannot guarantee the absolute security of your personal information.
          </p>
        </li>
        <li>
          <strong>Your Choices</strong>
          <p>
            You have the right to access, update, and correct your personal information. You can also request that we delete your personal information. To make these requests, please contact our customer support team.
          </p>
        </li>
        <li>
          <strong>Changes to Privacy Policy</strong>
          <p>
            We may update our Privacy Policy from time to time. If we make any material changes, we will notify you by email or by posting a notice on our website.
          </p>
        </li>
      </ol>
      <div>
        <strong>Contact Us</strong>
        <p style={{color:'#9d00ff'}}>
          If you have any questions about our Privacy Policy, please contact our customer support team.
          <br />
          E-mail: support@bazimaargames.com
        </p>
      </div>
    </div>
    </>
  );
};

export default PrivacyPolicy;
