import React from 'react';
import './BackImg.css';
import backgroundImage from '../images/pic1.jpg';
import { Link as LinkRoll,Button } from 'react-scroll';
// import MainPage from '../secondPage/Main';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

  const handleClick = () => {
    // Redirect to Page 2
    window.location.href ='https://epics-chi.vercel.app/';
  };

const BackImg = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '120vh',
      }}
    >
      <div className='imgsection'>
        <div className='imgtext'>
          <h2 className='intro'><b>YOUR CROP DOCTOR</b></h2>
        </div>
        <div className='imgtext'>
          <p>Crop disease detection made easy <br />Join Us Today!</p>
        </div>
      </div>
      <p className='text1'>Empowering Agriculture Through Precision Detection and Timely Solutions <br />
        <LinkRoll to="https://leetcode.com/zeus20/"><Button>Disease Prediction</Button></LinkRoll> <br />
        <LinkRoll to=""><Button>Crops prediction</Button></LinkRoll><br/>
        <LinkRoll to='https://leetcode.com/zeus20/'><button onClick={handleClick}>Random Button</button></LinkRoll>
        {/* <LinkRoll to='./garvitasapp3.0/index'></LinkRoll> */}
      </p>
      {/* <Router>
        <Routes>
          <Route path="/secondPage/mmain" element={<MainPage />} />
        </Routes>
      </Router>
       */}
    </div>
  );
};

export default BackImg;