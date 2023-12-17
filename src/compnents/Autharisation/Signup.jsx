import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { MdVisibilityOff, MdVisibility} from "react-icons/md";
import { userSignupActions } from "../../store/user_signup";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {ref} from "yup";
import { Link, useNavigate } from "react-router-dom";
import './Signup.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { toast } from "react-toastify";

const Signup = ()=>{
    const user_details = useSelector(state => state.user_signup);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialFormData = {
            email_id: "",
            name: "",
            dob: "",
            sex: "",
            password: "",
            confirm_password: "",
    }
    
    const signupFormSchema = Yup.object().shape({
          email_id: Yup.string().email('Invalid email').required("Email id is a required field"),
          name: Yup.string().trim().min(2, 'Too Short!').required("Name is a required field"),
          dob: Yup.date().required("Select date of birth"),
          sex: Yup.string().required("Select gender from dropdown"),
          password: Yup.string() .matches(
            /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).+$/,
            'Password must contain at least one special character'
          ).min(8, "Password must contain 8 characters").required("Password is a required field"),
        //   .matches(
        //     "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
        //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        //   ),
          confirm_password: Yup.string().required("Please re-type your password").oneOf([ref("password")], "Passwords must match")
    })

    const handleSignup = async(values)=>{
          try{
             await createUserWithEmailAndPassword(auth, values.email_id, values.password )
               .then(userCredential =>{
                const user = userCredential.user;
                console.log(user);

                toast.success("Signup successfully");
                dispatch(userSignupActions.userSignupDetails(values));
                navigate("/");

               }).catch(error =>{
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);
                 
                if(error.code === 'auth/email-already-in-use'){
                    toast.error("That email address is already in use!");
                    console.log("That email address is already in use!");
                    navigate("/");
                }
                else if (error.code === 'auth/invalid-email') {
                    toast.error('That email address is invalid!');
                    console.log('That email address is invalid!');
                }
                else if (error.code === "TOO_MANY_ATTEMPTS_TRY_LATER") {
                    toast.error("TOO_MANY_ATTEMPTS_TRY_LATER");
                    console.log("TOO_MANY_ATTEMPTS_TRY_LATER");
                  }
                
               })
          }
          catch(error){
            console.log(error);
          }
    }
    
    return (
       <section className="signup-wrapper">
         <div className="paddings innerWidth signup-container">
            <Formik
            initialValues={initialFormData}
            validationSchema={signupFormSchema}
            onSubmit={values =>{
                console.log(values, 'value');
                handleSignup(values);
            }}
            >
                {({errors, touched}) => (
                    <Form className="form">
                        <div className="flexColStart row-1">
                            <p className="secondaryText labelMargin">Email Id</p>
                            <Field type="email"  name="email_id"  placeholder="Enter your email"/>
                            {errors.email_id && touched.email_id ? <p className="errorText">{errors.email_id}</p> : null}
                        </div>
                        <div className="flexColStart row-1">
                            <p className="secondaryText labelMargin">Name</p>
                            <Field type="text" name="name" pattern="[A-Za-z]+" title="Only alphabetic characters are allowed" placeholder="Enter your name"/>
                            {errors.name && touched.name ? <p className="errorText">{errors.name}</p> : null}

                        </div>
                        <div className="flexColStart row-1">
                            <p className="secondaryText labelMargin">Date Of Birth</p>
                            <Field type="date" name="dob" className="secondaryText"/>
                            {errors.dob && touched.dob ? <p className="errorText">{errors.dob}</p> : null}

                        </div>
                        <div className="flexColStart row-1">
                            <p className="secondaryText labelMargin">Select Gender</p>
                            <Field as="select" name="sex" className="secondaryText" style={{width: "100%", padding: "5px"}}>
                                <option  value="" disabled>Select gender</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                                <option value="others">others</option>
                            </Field>
                            {errors.sex && touched.sex ? <p className="errorText">{errors.sex}</p> : null}

                        </div>
                        <div className="flexColStart row-2">
                            <p className="secondaryText labelMargin">Password</p>
                            <div className="flexCenter password">
                                <Field type={user_details.isPasswordShow ? 'text' : 'password'} name="password" placeholder="Enter password"/>
                                <span className="flexEnd" onClick={()=> dispatch(userSignupActions.toggleIsPasswordShow())}>
                                        {user_details.isPasswordShow ? <MdVisibility/> : <MdVisibilityOff/>}
                                </span>
                            </div>
                            {errors.password && touched.password ? <p className="errorText">{errors.password}</p> : null}
                        </div>
                        <div className="flexColStart row-2">
                            <p className="secondaryText labelMargin">Confirm Password</p>
                            <div className="flexCenter password">
                                <Field type={user_details.isConfirmPasswordShow ? 'text' : 'password'} name="confirm_password" placeholder="Re-type your password"/>

                                <span className="flexEnd" onClick={()=> dispatch(userSignupActions.toggleIsConfirmPasswordShow())}>
                                        {user_details.isConfirmPasswordShow ? <MdVisibility/> : <MdVisibilityOff/>}
                                </span>
                            </div>
                            {errors.confirm_password && touched.confirm_password ? <p className="errorText">{errors.confirm_password}</p> : null}
                        </div>
                        <div className="paddings flexColCenter" style={{width:'100%', marginTop:'0.5rem'}}>
                            <button type="submit" className="button" style={{width: '100%', padding:'0.5rem', fontWeight:'500'}}>Create an Account</button>
                        </div>
                        <div className="flexCenter secondaryText signin-account">
                            <p>Have an Account ?</p> <Link to='/login' className="signin-link">Sign in</Link>
                        </div>
                    </Form>
                )}
            </Formik>
         </div>
    </section>
    )
}
export default Signup;