import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      email_id: "",
      password: "",
      isRemember: true,
      isPasswordShow: false,
}

const slice = createSlice({ 
      name: 'user_signin',
      initialState: initialState,
      reducers: {
               toggleIsPasswordShow(state, action){
                 state.isPasswordShow = !state.isPasswordShow
               },
               userSigninDetails(state, action){
                  const user_details = action.payload;
                  console.log(user_details);
              }

      }
      

})

export const userSigninActions = slice.actions;
export default slice.reducer;