import React from 'react'
import Header from './Header';
import Feature from './Feature';
import About from './About';
import AboutImages from '../Images/Wingo Logo.png'
import AboutImaged from '../Images/Dragon & Tiger Logo.png'
import AboutImage from '../Images/Lucky.png'
import LuckySpin from '../Images/Lucky Spin Logo.png'
import Presentation from './Presentation';
import Contact from './Contact';
import Mines from '../Images/Mines Logo.png'

function Home() {
  return (
    <>
    <Header/>
    <div className="App">
    
    <Feature/>
    <Presentation/>
    <About image={LuckySpin} title="Bazi Maar Games" button='Download App'/>
    <Contact/>
    
  </div>
  </>
  )
}

export default Home
