import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import OTPScreen from './OTP';

const LoginForm = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [refers, setRefer] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Get the referral code from the URL query parameters
    const params = new URLSearchParams(location.search);
    const referralCode = params.get('refer');

    if (referralCode) {
      // Do something with the referral code, e.g., store it in state or perform some action
      setRefer(referralCode)
      console.log('Referral Code:', referralCode);
    }
  }, [location.search]);

  const generateRandomOtp = async () => {
    return Math.floor(100000 + Math.random() * 900000); // Random 6-digit number
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
      setError('Enter a Correct Phone Number');
      return;
    }

    try {
        navigate("/otp", { state: { phone: phone, refer: refers, otp: '000000' } });
      const randomOtp = await generateRandomOtp();
      setOtp(randomOtp);

      // Append query parameters to the URL
      const url = `https://www.fast2sms.com/dev/bulkV2?authorization=SYhcdHt0lOBuJ7L2soRIN81K9qCrzPwZbpFGTfE3ixj6nyQMW5M6sAthQzjeRf2Dpm7NSwXc8lKdF1u3&variables_values=${randomOtp}&route=otp&numbers=${phone}`;

      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: url,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      await axios.request(config);

      setPhone('');
      setError('');
    //   navigate("/otp", { state: { phone: phone, refer: refers, otp: randomOtp } });
    } catch (error) {
      alert("Too Many Attempts for this Number! Please Try Again after Sometime");
      console.error('Error:', error.response);
      // Handle error
    }
  };

  return (
    <>
      <ToastContainer />
      <div style={{ background: 'black', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh', color: 'white' }}>
        <header style={{
          padding: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'

        }}>
          <div style={{ marginLeft: 'auto' }}>
            <img
              src="./rocket.png"  // Replace with the actual path of your rocket image
              alt="Rocket"
              style={{
                width: '100px',  // Adjust the size as needed
                height: 'auto',
              }}
            />
          </div>
          {/* Other header content goes here */}
        </header>
        <form onSubmit={handleLogin} >
          <div style={{ marginLeft: '5px', padding: '30px', marginRight: '25px' }}>
            <h1>My mobile</h1>
            <p>Please enter your valid phone number<br />We will send you a 4 digit code to verify your account.</p>
            <div style={{
              width: '100%',
              marginTop: '50px',
              borderRadius: '10px',
              background: 'black',
              position: 'relative',
              border: '1px solid white',  // Add a white border
              boxSizing: 'border-box',  // Include border in the total width
              padding: '12px',  // Adjust padding as needed

            }}
              onFocus={(e) => e.target.style.border = '2px solid black'}>
              <img
                src="./indian.png"  // Replace with the actual path of your Indian flag logo
                alt="Indian Flag"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '10px',
                  transform: 'translateY(-50%)',
                  width: '30px',  // Adjust the size as needed
                  height: 'auto',
                }}
              />

              <span style={{
                position: 'absolute',
                top: '50%',
                left: '50px',
                transform: 'translateY(-50%)',
                color: 'white',
                fontWeight: 'bold',
              }}>+91|</span>

              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
                maxLength={10}
                style={{
                  width: 'calc(100% - 80px)',
                  padding: '8px',
                  borderRadius: '5px',
                  border: 'none',
                  background: 'transparent',
                  color: 'white',
                  height: '30px',
                  marginLeft: '80px',
                  boxSizing: 'border-box',
                  outline: 'none',  // Remove the default focus outline
                }}
                onFocus={(e) => e.target.style.border = '2px solid black'}  // Change border color on focus
                onBlur={(e) => e.target.style.border = 'none'}  // Remove border color on blur
              />
            </div>
            {error && <p style={{ color: 'red' }}>Please Enter Phone Number</p>}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '10px',
                height: '50px',
                border: 'none',
                background: '#352C73',
                color: 'white',
                cursor: 'pointer',
                marginTop: '400px'
              }}
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
