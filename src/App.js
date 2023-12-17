// import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Signin from './compnents/Autharisation/Signin';
import Signup from './compnents/Autharisation/Signup';
import Contact from './compnents/Contact/Contact';
import Footer from './compnents/Footer/Footer';
import GetStarted from './compnents/GetStarted/GetStarted';
import Header from "./compnents/Header/Header";
import Hero from "./compnents/Hero/Hero";
import Residencies from './compnents/Residencies/Residencies';
import Router from './compnents/Routes/Routes';
import Value from './compnents/Value/Value';
import Companies from './compnents/companies/companies';
import 'react-toastify/dist/ReactToastify.css';


function App() {
   
  return (
    <div className="App">
       <ToastContainer position='top-center'/>
       <Router/>
       {/* <div>
          <div className='white-gradient'/>
          <Header/>
          <Hero/>
       </div> 
        <Companies/>
       <Residencies/>
       <Value/>
       <Contact/>
       <GetStarted/>
       <Footer/> */}
       {/* <Signin/>
       <Signup/> */}
    </div>
  );
}

export default App;
