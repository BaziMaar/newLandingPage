import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import AboutImages from './Images/abouts2.png'
import AboutImaged from './Images/abouts3.png'
import AboutImage from './Images/abouts1.png'
import Presentation from './Components/Presentation';
import Contact from './Components/Contact';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsAndConditions from './Components/TermsAndCondition';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/privacy' element={<PrivacyPolicy/>}/>
      <Route path='/terms' element={<TermsAndConditions/>}/>
      </Routes>
    </Router>

  );
}

export default App;
