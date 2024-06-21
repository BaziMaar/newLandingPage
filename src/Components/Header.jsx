import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'

function Header() {
  const [versionLink, setVersionLink] = useState('');
  useEffect(()=>{
   getVersionLink()
  })

  const getVersionLink = async () => {
    try {
      const response = await fetch('https://sattajodileak.com/user/getVersion');
      const data = await response.json();
      if (data && data.latestEntry && data.latestEntry.link) {
        setVersionLink(data.latestEntry.link);
      } 
      else {
        console.error('Invalid response format from the API');
      }
    }
    catch (error) {
      console.error('Error fetching version link:', error);
    }
  };
  return (
    <>
    <Navbar/>
    <div id='main'>
        
        <div className='name'>
            <h1><span>Play BaziMaar Game </span>and Earn Money</h1>
            <p className='details'>Imagine a treasure trove of games, each waiting to unleash a unique thrill. Dive into vibrant slots designed by global giants, or uncover hidden gems crafted by passionate studios. In this diverse landscape, where dazzling animations meet captivating styles, one name stands out: Bazi Maar Games. A legend among Indian players, its offerings promise fair play for all, but with a twist. Its secret? Unique characteristics that keep you coming back for more, leaving you with an insatiable hunger for the next adrenaline rush.</p>
            <a href={versionLink} className='cv-btn'>Download</a>
        </div>
      
    </div>
    </>
  )
}

export default Header
