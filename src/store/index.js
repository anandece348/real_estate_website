import { configureStore } from "@reduxjs/toolkit";
import userSigninReducers from './user_signin';
import userSignupReducers from './user_signup';


const store = configureStore({
    reducer:{
           user_signin: userSigninReducers,
           user_signup: userSignupReducers
    }
})

export default store;