import React from 'react'
import Header from './Header';
import Feature from './Feature';
import About from './About';
import AboutImages from '../Images/abouts2.png'
import AboutImaged from '../Images/abouts3.png'
import AboutImage from '../Images/abouts1.png'
import Presentation from './Presentation';
import Contact from './Contact';

function Home() {
  return (
    <div className="App">
    <Header/>
    <Feature/>
    <Presentation/>
    <About image={AboutImaged} title="Spin" button='Download App'/>
    <About image={AboutImage} title="Aviator" button='get the app'/>
    <About image={AboutImages} title="Mines" button='Download App'/>
    <Contact/>
    
  </div>
  )
}

export default Home
