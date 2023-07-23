import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authServices";
import jwt_decode from "jwt-decode";


const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  userDecoded: user ? jwt_decode(user.access) : null,
  loading: false,
  successed: false,
  error: false,
  message: "",
};


export const loginThunk = createAsyncThunk(
    '/token',
    async (user,thunkAPI)=>{
        try{
            return await authService.login(user)
        }
        catch(error){
            const message =(error.response)
            return thunkAPI.rejectWithValue(message)
        }
    }
)
export const signUpThunk = createAsyncThunk(
    '/sign-up',
    async (user,thunkAPI)=>{
        try{
            return await authService.signUp(user)
        }
        catch(error){
            const message =(error.response)
            return thunkAPI.rejectWithValue(message)
        }
    }
)
export const logout = createAsyncThunk('/logout', async () => {
    await authService.logout()
  })
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.successed = false;
      state.error = false;
      state.message = '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpThunk.pending, (state) => {
        state.loading = true
      })
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.loading = false
        state.successed = true
        state.user = action.payload
        state.userDecoded=action.payload
        
      })
      .addCase(signUpThunk.rejected, (state, action) => {
        state.loading = false
        state.error = true
        state.message = action.payload
        state.user = null
        state.userDecoded=null
      })
      .addCase(loginThunk.pending, (state) => {
        state.loading = true
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false
        state.successed = true
        state.user = action.payload
        state.userDecoded=action.payload
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false
        state.error = true
        state.message = action.payload
        state.user = null
        state.userDecoded=null
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
        state.userDecoded=null
      })
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;