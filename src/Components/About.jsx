import React, { useState, useEffect } from 'react';

function About(props) {

  const handleButtonClick = () => {
    window.open(props.link, '_blank');
  };

  return (
    <div id='about'>
      <div className='about-text'>
        <h2>{props.title}</h2>
        <p>Imagine a treasure trove of games, each waiting to unleash a unique thrill. Dive into vibrant slots designed by global giants, or uncover hidden gems crafted by passionate studios. In this diverse landscape, where dazzling animations meet captivating styles, one name stands out: Bazi Maar Games. A legend among Indian players, its offerings promise fair play for all, but with a twist. Its secret? Unique characteristics that keep you coming back for more, leaving you with an insatiable hunger for the next adrenaline rush.</p>
        <p>Play Bazi Maar on mobile with all players world around. Share your love for Bazi Maar & Free money.</p>
        <p>Practice Bazi Maar free online with other rookie players. Learn Bazi Maar through hands-on experience. Practice straight away!</p>
        <p>Compete in your favorite Bazi Maar game to win REAL MONEY!</p>
        <p>Select your preferred stakes 0.2Rs/0.5Rs and start playing Bazi Maar right away.</p>
        <p>Sign up Bazi Maar with Referral Code and WIN BIG with! Deposit or withdraw money for registered players only.</p>
        <p>Play Bazi Maar anytime, anywhere. Win a lot of chips in new game modes and Variations. Win the most chips to come out on top!</p>
        <p>Daily Bonus: Claim Free chips everyday in Rummy Honest. Win a daily bonus of up to 1000 in coins!</p>
      </div>
    </div>
  );
}

export default About;
