import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Companies from "../companies/companies";
import Residencies from "../Residencies/Residencies";
import Value from "../Value/Value";
import Contact from "../Contact/Contact";
import GetStarted from "../GetStarted/GetStarted";
import Footer from "../Footer/Footer";
import './Home.css';
const Home = () => {
  return (
    <div className="home">
      <div>
          <div className='white-gradient'/>
          <Header/>
          <Hero/>
       </div> 
       <Companies/>
       <Residencies/>
       <Value/>
       <Contact/>
       <GetStarted/>
       <Footer/>
    </div>
  );
};
export default Home;
