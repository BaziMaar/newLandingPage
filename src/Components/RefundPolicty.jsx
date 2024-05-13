import React from 'react';
import Navbar from './Navbar';

const RefundPolicy = () => {
  return (
    <>
    <Navbar/>
    <div style={{ backgroundColor: 'black', color: 'white', padding: '20px',alignItems:'center',justifyContent:'center',marginTop:30 }}>
      <h1 style={{color:'#9d00ff'}}>Refund Policy</h1>
        <li>
          <p>
          Thanks for being a patron with Bazi Maar Games. If you are not entirely satisfied with your subscription, we are here to help.
          </p>
        </li>
        <li>
          <strong>Refund</strong>
          <p>
          Once we receive your Refund request, we will inspect it and notify you on the status of your refund.
          If your refund request is approved, we will initiate a refund to your credit card (or original method of payment) within 7 working days. You will receive the credit within a certain amount of days, depending on your card issuer's policies.In case of unforeseen technical glitch, Bazi Maar Games would refund subscription upon reviewing the complaint. Final decision lies with the company.
        </p>
        </li>
      </div>
    </>
  );
};

export default RefundPolicy;
