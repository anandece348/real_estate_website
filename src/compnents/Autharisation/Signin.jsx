import { useState, useEffect } from "react";
import { MdVisibilityOff, MdVisibility} from "react-icons/md";
import './Signin.css';
import { Link, useNavigate } from "react-router-dom";
import { userSigninActions } from "../../store/user_signin";
import { useDispatch, useSelector } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { toast } from "react-toastify";

const Signin = ()=>{
      const user_details = useSelector(state => state.user_signin);
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const [signinFormDetails, setSigninFormDetails] = useState({
            email_id: "",
            password: "",
            isRemember: true,
            isPasswordShow: false,
      })
    const handleEmailId = (e)=>{
          setSigninFormDetails({...signinFormDetails, email_id: e.target.value});
    }

    const handlePasword = (e)=>{
          setSigninFormDetails({...signinFormDetails, password: e.target.value});
    }
    
    const handleIsRember = ()=>{
          setSigninFormDetails({...signinFormDetails, isRemember: !signinFormDetails.isRemember});
    }
    
    const handleSignin = async()=>{
          try{
              await signInWithEmailAndPassword(auth, signinFormDetails.email_id, signinFormDetails.password)
              .then((userCredential) => {
                  const user = userCredential.user;
                  console.log(user);

                  if(signinFormDetails.isRemember){
                        localStorage.setItem("token", JSON.stringify(user.accessToken));
                        localStorage.setItem("isRemember", signinFormDetails.isRemember);
                        toast.success("Signin successfully");
                        navigate('/home');
                  }
                  else{
                        toast.error("Please select checkbox");
                        return;
                  }
                  
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorCode);
                  console.log(errorMessage);

                  if(errorCode === "auth/user-not-found"){
                        toast.error("User not found");
                  }
                });

          }
          catch(error){
              console.log(error);
          }
    }
    
    return (
    <section className="signin-wrapper">
         <div className="paddings innerWidth container">
              <div className="flexColStart row-1">
                 <p className="secondaryText">Email Id</p>
                 <input type='text' placeholder='Enter your email' onChange={handleEmailId}/>
              </div>
              <div className="flexColStart row-2">
                <p className="secondaryText">Password</p>
                 <div className="flexCenter password">
                  <input type={user_details.isPasswordShow ? 'text' : 'password'} placeholder='Enter Password' onChange={handlePasword}/>
                  <span className="flexEnd" onClick={()=> dispatch(userSigninActions.toggleIsPasswordShow()) }>
                        {user_details.isPasswordShow ? <MdVisibility/> : <MdVisibilityOff/>}
                  </span>
                 </div>
              </div>
              <div className="flexCenter row-3">
                    <div className="flexCenter">
                      <input type="checkbox" defaultChecked={user_details.isRemember} onChange={handleIsRember}/>
                      <span className="secondaryText isRemember">is Remember</span>
                    </div>
                    <div><a href="#" className="secondaryText forgot_password">forgot password</a></div>
              </div>
              <div className="flexColCenter row-4" onClick={handleSignin}>
                  Signin
              </div>
              <div className="flexColCenter row-5">
                <p className="secondaryText">OR</p>
                <p className="secondaryText">Signin With</p>
              </div>
              <div className="flexCenter row-6">
                <div><img src="./google_logo.png" width={45}/></div>
                <div><img src="./facebook.png" width={60}/></div>
                <div><img src="./linkedin.png" width={45} alt=""/></div>
              </div>
              <div className="flexCenter secondaryText row-7">
                <p>Don't have an Accout ?</p><Link to='/signup' className="signup-link">Sign up</Link>
              </div>
         </div>
         
    </section>
    )
}
export default Signin;