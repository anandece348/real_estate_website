import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      email_id: "",
      name: "",
      dob: "",
      sex: "",
      password: "",
      confirm_password: "",
      isPasswordShow: false,
      isConfirmPasswordShow: false,
}

const slice = createSlice({ 
      name: 'user_signup',
      initialState: initialState,
      reducers: {
               toggleIsPasswordShow(state, action){
                 state.isPasswordShow = !state.isPasswordShow
               },
               toggleIsConfirmPasswordShow(state, action){
                state.isConfirmPasswordShow = !state.isConfirmPasswordShow
              },
              userSignupDetails(state, action){
                  const user_details = action.payload;
                  console.log(user_details, 'signup details');
              }
      }

})

export const userSignupActions = slice.actions;
export default slice.reducer;