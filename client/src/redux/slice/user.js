import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const singUpUrl = "/user/signUp";
const loginUrl = "/user/signIn";

export const userSignUp = createAsyncThunk(
  singUpUrl,
  async (newUser, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(newUser);
      const { data } = await axios.post(singUpUrl, body, config);
      console.log(data);
      localStorage.setItem("token", JSON.stringify(data.token));
      return data;
    } catch (error) {
      console.error(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const userLogin = createAsyncThunk(loginUrl, async (user, thunkAPI) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(user);
    const { data } = await axios.post(loginUrl, body, config);
    console.log(data);
    localStorage.setItem("token", JSON.stringify(data.token));
    return data;
  } catch (error) {
    console.error(error.response.data);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const initialState = {
  user: null,
  loading: false,
  error: null,
  token: localStorage.getItem("token"),
};
export const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // singUp Loding
    builder.addCase(userSignUp.pending, (state) => {
      state.loading = true;
    });
    // singUp Success

    builder.addCase(userSignUp.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      // state.token=localStorage.setItem("token",action.payload.token)
      state.error = null;
    });
    // Login Fail

    builder.addCase(userSignUp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.errors;
      state.user = null;
      localStorage.clear();
    });
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
    });
    // Login Success

    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.error = null;
    });
    // Login Fail

    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.errors;
      state.user = null;
      localStorage.clear();
    });
  }
})
;
export default userSlice.reducer;
