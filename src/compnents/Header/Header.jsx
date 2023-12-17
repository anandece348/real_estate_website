// import logo1 from '../assest/logo1.png';
import { useState, useEffect } from 'react';
import {BiMenuAltRight} from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import './Header.css';
import { isLoggedOut } from '../Autharisation/auth';
import { toast } from 'react-toastify';
import { auth } from '../../firebase/firebase';

const Header = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const navigate  = useNavigate();
    const location = useLocation();
    
    const getMenuStyle = (isMenuOpened)=>{
        if(document.documentElement.clientWidth <= 800){
            return {right: !isMenuOpened && "-100%"}
        }
    }

     
    const handleLogout = async()=>{
           try{
               await signOut(auth).then(() => {
                    // Sign-out successful.
                    isLoggedOut();
                    toast.success("Logout successfully");
                    localStorage.removeItem("isRemember");
                    localStorage.removeItem("token");
                    navigate("/");
              })
              .catch((error) => {
                 console.log(error);
                // An error happened.
              });
           }
           catch(error){
            console.log(error);
           }
    }

  useEffect(() => {
    // Extract the fragment identifier from the URL
    const hash = location.hash.substring(1); // Remove the '#' symbol
    // console.log(hash);

    // If the hash matches the target section (e.g., 'residencies'), scroll to it
    if (hash) {
      const targetElement = document.getElementById(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                {/* <img src={logo1} alt='logo' width={100}/> */}
                <img src='./logo1.png' alt='logo' width={100}/>
                <OutsideClickHandler
                  onOutsideClick={() => setIsMenuOpened(false)}
                >
                    <div className="flexCenter h-menu"
                    style={getMenuStyle(isMenuOpened)}
                    >
                        <Link to="/home#residencies">Residencies</Link>
                        <Link to="/home#value">Our Value</Link>
                        <Link to="/home#contact_us">Contact Us</Link>
                        <Link to="/home#get_started">Get Started</Link>
                        <button className="button"><a href="mailto:anandece2608@gmail.com">Contact</a></button>
                        <button className="button logout-button" onClick={handleLogout}>Logout</button>

                    </div>
                </OutsideClickHandler>
                <div className='menu-icon' 
                   onClick={() => setIsMenuOpened(prev => !prev)}
                >
                       <BiMenuAltRight size={30}/>
                </div>
                 
            </div>
        </section>
    ) 
}
export default Header;
