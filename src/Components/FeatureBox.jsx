import React from 'react';

function FeatureBox(props) {
  return (
    <div className='a-box'>
      <div className='a-b-img'>
        <img src={props.image} alt={props.title} />
      </div>
      <div className='s-b-text'>
        <h2>{props.title}</h2>
        <button className='download-btn'>Download</button>
      </div>
    </div>
  );
}

export default FeatureBox;

