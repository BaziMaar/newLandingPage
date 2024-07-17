import React from 'react';

function FeatureBox(props) {
  const handleButtonClick = () => {
    window.open(props.link, '_blank');
  };
  return (
    <div className='a-box'>
      <div className='a-b-img'>
        <img src={props.image} alt={props.title} />
      </div>
      <div className='s-b-text'>
        <h2>{props.title}</h2>
        <button onClick={handleButtonClick} className='download-btn' >Download</button>
      </div>
    </div>
  );
}

export default FeatureBox;

