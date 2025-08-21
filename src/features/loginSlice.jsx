import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: [],
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    saveLogin: (state, action) => {
      let newobj = {};
      newobj.username = action.payload.querySelector(".input_username").value;
      newobj.email = action.payload.querySelector(".input_email").value;
      newobj.pass = action.payload.querySelector(".input_pass").value;
      state.userInfo.push(newobj);
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveLogin } = loginSlice.actions;

export default loginSlice.reducer;
