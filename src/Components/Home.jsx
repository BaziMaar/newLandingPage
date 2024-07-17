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
    <Header/>
    <div className="App">
    
    <Feature link={versionLink}/>
    <Presentation/>
    <About image={LuckySpin} title="Bazi Maar Games" button='Download App' link={versionLink}/>
    <Contact/>
    
  </div>
  </>
  )
}

export default Home
