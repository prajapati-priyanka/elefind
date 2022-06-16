import { createSlice } from "@reduxjs/toolkit";
import { loginUser,signupUser } from "../../redux/asyncThunks/authThunk";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser :(state)=>{
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token")
    }
  },
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.isLoading = true;
    },

    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data.foundUser;
      state.token = action.payload.data.encodedToken;
    },

    [loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.error.message)
    },
    [signupUser.pending]: (state, action) => {
      state.isLoading = true;
    },

    [signupUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data.foundUser;
      state.token = action.payload.data.encodedToken;
    },

    [signupUser.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.error.message)
    },
  },
});

export const {logoutUser} = authSlice.actions;
export const {reducer:authReducer} = authSlice
