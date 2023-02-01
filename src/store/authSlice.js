import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  authState: {
    data: {},
    user: {},
    error: {},
    status: '',
    isloading: false,
    authentication: ''
  },
};

export const getMe = createAsyncThunk(
  "auth/getMe", async (data, thunkAPI) => {
    try {
      const tokenStr = localStorage.getItem("token");
      let userDetails = localStorage.getItem('userDetails');
      userDetails = JSON.parse(userDetails);
      const response = await axios.get(
        `${process.env.apiUrl}/api/user/${userDetails.id}`,
        {
          headers: {
            Authorization: `Bearer ${tokenStr}`,
            "Content-Type": "application/json",
          },
        }
      );
      thunkAPI.dispatch(setUserInfo({ data: response.data?.user }));
    } catch (error) {
      console.log(error.response?.data?.message);
      thunkAPI.dispatch(setAuthError( error.response?.data?.message ));
      return thunkAPI.rejectWithValue({ error: error.message });
    }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    setAuthState(state, action) {
      state.authState.data = action.payload.data;
      state.authState.status = action.payload.status;
      state.authState.isloading = false;
      state.authState.authentication = 'valid';
    },

    setUserInfo(state, action) {
      state.authState.user = action.payload.data;
      state.authState.isloading = false;
    },

    setLoading(state, action) {
      state.authState.isloading = action.payload;
    },

    setAuthError(state, action) {
      state.authState.error.message = action.payload;
      state.authState.isloading = false;
      state.authState.authentication = 'invalid';
    },

  },
});

export const { setAuthState, setAuthError, setLoading, setUserInfo } = authSlice.actions;

export const selectAuthState = (state) => state.auth.authState;

export default authSlice.reducer;
