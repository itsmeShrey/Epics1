import './App.css';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/firstPage/navbar';
import BackImg from './components/firstPage/BackImg';
import Footer from './components/firstPage/Footer';
import AboutUs from './components/firstPage/about'
import ContactUs from './components/contactUs';
// import Home from  './components/home'
// import './components/home'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BackImg/>
      <AboutUs/>
      <ContactUs/>
      <Footer/>
      
      {/* <Router>
        <Route path="/home" component={Home} />

      </Router> */}
      


      {/* <Router>
        {/* <Route path="/" exact component={HomePage} /> */}
        {/* <Routes path="./contact-us/contactUs" component={ContactUs} />
      </Router> */} 
     
    </div>
  );
}

export default App;
