import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OTPScreen = () => {
  const [otp, setOTP] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [timer, setTimer] = useState(60); // Timer starts from 60 seconds
  const navigate = useNavigate();
  const location = useLocation();
  const phone = location.state ? location.state.phone : '';
  const refer = location.state ? location.state.refer : '';
  const [prevOtp, setPrevOtp] = useState(null);
  const [versionLink, setVersionLink] = useState('');

  useEffect(() => {
    getVersionLink();
  }, []);

  const getVersionLink = async () => {
    try {
      const response = await fetch('https://sattajodileak.com/user/getVersion');
      const data = await response.json();
      if (data && data.latestEntry && data.latestEntry.link) {
        setVersionLink(data.latestEntry.link);
      } else {
        console.error('Invalid response format from the API');
      }
    } catch (error) {
      console.error('Error fetching version link:', error);
    }
  };

  const handleChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 2}`).focus();
    }
  };

  const generateRandomOtp = () => {
    return Math.floor(100000 + Math.random() * 900000); // Random 6-digit number
  };

  const handleResendOTP = async () => {
    const randomOtp = generateRandomOtp();
    setPrevOtp(randomOtp);

    const url = `https://www.fast2sms.com/dev/bulkV2?authorization=SYhcdHt0lOBuJ7L2soRIN81K9qCrzPwZbpFGTfE3ixj6nyQMW5M6sAthQzjeRf2Dpm7NSwXc8lKdF1u3&variables_values=${randomOtp}&route=dlt&numbers=${phone}&sender_id=BZND74&message=170253`;

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: url,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      await axios.request(config);
    } catch (error) {
      alert("Too Many Attempts for this Number! Please Try Again after Sometime");
      console.error('Error:', error);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    const enteredOTP = otp.join('');
    if (enteredOTP.length !== 6 || !/^\d+$/.test(enteredOTP)) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }
    if (enteredOTP == prevOtp) {
      try {
        const loginResponse = await axios.post('https://sattajodileak.com/user/login', {
          phone: phone,
        });
        alert("Already Registered");

        // Navigate to the version link if already registered
          window.location.href = versionLink;
          navigate("/", { state: { phone: phone, refer: refer } });


        setError('');
      } catch (err) {
        navigate("/signup", { state: { phone: phone, refer: refer } });
        setError('Error occurred while logging in. Please try again.');
        console.error('Login Error:', err);
      }
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    setPrevOtp(location.state.otp);
    
    if (timer === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer]);

  const formattedTimer = `${Math.floor(timer / 60)
    .toString()
    .padStart(2, '0')}:${(timer % 60).toString().padStart(2, '0')}`;

  return (
    <div style={{
      background: 'black',
      minHeight: '100vh',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <form onSubmit={handleVerifyOTP} style={{
        background: 'rgba(0, 0, 0, 0.7)',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        width: '300px',
      }}>
        <div style={{ marginBottom: '20px' }}>
          <h1 style={{
            textAlign: 'center',
            marginBottom: '10px',
            color: '#ecf0f1'
          }}>{formattedTimer}</h1>
          <h4 style={{
            textAlign: 'center',
            color: '#ecf0f1'
          }}>
            Type the verification code we have sent you on {phone}
          </h4>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px'
          }}>
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index + 1}`}
                placeholder='X'
                type="tel"
                value={digit}
                maxLength={1}
                onChange={(e) => handleChange(index, e.target.value)}
                style={inputStyle}
                onFocus={(e) => e.target.style.border = '2px solid #352C73'}
              />
            ))}
          </div>
          <a onClick={handleResendOTP} style={{ textAlign: 'right', color: '#ecf0f1', cursor: 'pointer' }}>
            Resend OTP
          </a>
        </div>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '18px',
            borderRadius: '8px',
            border: 'none',
            background: '#352C73',
            marginTop: '300px',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  width: '40px',
  height: '40px',
  textAlign: 'center',
  margin: '0 5px',
  borderRadius: '12px',
  border: '1px solid white',
  background: 'black',
  color: 'white',
  outline: 'none',
};

export default OTPScreen;
