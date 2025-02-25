/* eslint-disable jsx-a11y/alt-text */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../utils/axios';
import { getCookie, setCookie } from '../utils/helper/Helper';
import { toast } from '../components/common/toast/toast';

export const loginUser = createAsyncThunk('/admin/auth/login', async (payload, thunkAPI) => {
  try {
    const { data } = await axios.post('/admin/auth/login', payload);
    console.log('register', data);

    if (data.status !== 'success') {
      toast.error(data.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data.status === 'success') {
      toast.success(data.message);
      await thunkAPI.dispatch(setToken(data.data.token));
      return data;
    }
  } catch (err) {
    toast.success(err);
    console.log(err);

    if (err.response.data.status === 'fail' && err.response.status !== 401) {
    }
    return err;
  }
});

export const auth = createSlice({
  name: 'auth',
  initialState: {
    // user: JSON.parse(localStorage.getItem("user")),
    isAuth: false,
    loading: false,
    token: getCookie('token'),
    sidebar: false,
  },
  reducers: {
    setToken: (state, action) => {
      setCookie('token', JSON.stringify(action.payload));
      state.isAuth = true;
    },
    toggleSidebar: (state, action) => {
      state.sidebar = !state.sidebar;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state) => {
      state.loading = false;
    },
    [loginUser.rejected]: (state) => {
      // localStorage.removeItem("token");
      state.loading = false;
      state.isAuth = false;
      state = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken } = auth.actions;

export default auth.reducer;
