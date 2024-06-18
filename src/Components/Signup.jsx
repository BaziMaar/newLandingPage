import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';
import OTPScreen from './OTP';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [refers,setRefer]=useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const phone = location.state ? location.state.phone : '';
  const refer=location.state?location.state.refer:'';
  console.log(`>>>>>>>>${JSON.stringify(location)}`)
  useEffect(() => {
    // Set the referral code from the link to the state
    setRefer(refer);
  }, [refer]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!phone) {
      setError('Please enter a phone number');
      return;
    }
    const loginResponse = await axios.post('https://sattajodileak.com/user/login', {
          phone: phone,
          name:name,
          email:email,
          avatar:0,
          refer_id:refer,
          deviceId:1234
          // Add any other relevant data you want to send with the login request
        });
        if(loginResponse){
          alert("Successfully LoggedIn")
        }
        else{
          alert("SOMETHING WENT WRONG")
        }
        console.log('Login Response:', loginResponse.data);
        navigate("/download");

    // Your API call logic here

    // If successful response from API, navigate to OTP screen
  };

  return (
    <div style={{ background: 'black', minHeight: '100vh', color: 'white' }}>
      <header style={{ padding: '16px', display: 'flex', justifyContent: 'center' }}>
        <img
          src="/images/rocket.png"
          alt="Rocket"
          style={{ width: '100px', height: 'auto' }}
        />
      </header>
      <form onSubmit={handleLogin} style={{ padding: '0 20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginTop:"20px" }}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            style={inputStyle}
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            style={inputStyle}
          />
          <input
            type="text"
            value={refers}
            onChange={(e) => setRefer(e.target.value)}
            placeholder="Referral Code"
            style={inputStyle}
          />
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
          <button type="submit" style={buttonStyle}>
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  maxWidth: '400px',
  padding: '15px',
  borderRadius: '10px',
  border: '1px solid white',
  background: 'black',
  color: 'white',
  marginBottom: '20px',
  boxSizing: 'border-box',
  outline: 'none'
};

const buttonStyle = {
  width: '100%',
  maxWidth: '400px',
  padding: '15px',
  borderRadius: '10px',
  border: 'none',
  background: '#352C73',
  color: 'white',
  cursor: 'pointer',
  marginTop:'400px'
};

export default Signup;
