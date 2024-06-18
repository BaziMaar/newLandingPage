import React from 'react'
import FeatureBox from './FeatureBox'
import FeatureImage1 from '../Images/featuress1.png'
import FeatureImage2 from '../Images/miness.png'
import FeatureImage3 from '../Images/spins.png'
function Feature() {
  return (
    <div id='features'>
        <div className='a-container'>
            <FeatureBox image={FeatureImage1} title='Avaitor' description='Bazi Maar is a crash game for money at the popular online  BaziMaar. The main essence of the game is a prediction and bet on the flight of a rocket and a possible coefficient that multiplies your bet up to x100. The game has promo code bonuses for new players when registering a personal account. Popular bloggers offer various strategies to win money, which you can try out in demo mode and choose the best tactics and schemes to earn money. The game attracts a unique Telegram bot with signals and round-the-clock support, which will help with withdrawals and balance replenishment. The game is available in mobile application which you can download for free on android from the official site 1 win and play for money.'/>
            <FeatureBox image={FeatureImage2} title='Mines' description='Mines bet, a crash game, is gaining prominence among Brazilian gamblers. In this guide, it is presented in detail. Undoubtedly, it deserves all your attention.'/>
            <FeatureBox image={FeatureImage3} title='Spin' description='Lucky Spin is a lifestyle application developed by Wings Media that helps users make money through minigames and other fun activities. With this software, there is no need to have any investment or payment platforms to begin legitimately earning money. Users can collect daily rewards at any time. Some of the available money earning methods include daily spins, money check-in, bumper offers, watch sponsored videos, and friend referrals. Users can get an unlimited amount of coins every time they complete a deal. The rewards and coins they earned will be sent to them, which they can convert to real-life cash. '/>
            <FeatureBox image={FeatureImage3} title='Dragon Tiger' description='Lucky Spin is a lifestyle application developed by Wings Media that helps users make money through minigames and other fun activities. With this software, there is no need to have any investment or payment platforms to begin legitimately earning money. Users can collect daily rewards at any time. Some of the available money earning methods include daily spins, money check-in, bumper offers, watch sponsored videos, and friend referrals. Users can get an unlimited amount of coins every time they complete a deal. The rewards and coins they earned will be sent to them, which they can convert to real-life cash. '/>
            <FeatureBox image={FeatureImage3} title='Wingo' description='Lucky Spin is a lifestyle application developed by Wings Media that helps users make money through minigames and other fun activities. With this software, there is no need to have any investment or payment platforms to begin legitimately earning money. Users can collect daily rewards at any time. Some of the available money earning methods include daily spins, money check-in, bumper offers, watch sponsored videos, and friend referrals. Users can get an unlimited amount of coins every time they complete a deal. The rewards and coins they earned will be sent to them, which they can convert to real-life cash. '/>
        </div>
      
    </div>
  )
}

export default Feature
