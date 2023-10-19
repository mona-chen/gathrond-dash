/* eslint-disable jsx-a11y/alt-text */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../utils/axios';
import { getCookie } from '../utils/helper/Helper';
import { toast } from '../components/common/toast/toast';

export const getGamesStock = createAsyncThunk('/apps/games/get_games_in_stock', async (payload, thunkAPI) => {
  try {
    const { data } = await axios.get(`/admin/game/get_games_in_stock?cursor=${payload?.cursor ?? 0}`, payload);
    // console.log("stocker stor", data);

    if (data.status !== 'success') {
      toast.error(data.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data.status === 'success') {
      // toast.success(data.message);
      await thunkAPI.dispatch(setInStock(data?.data?.games));
      return data;
    }
  } catch (err) {
    toast.error(err);
    console.log(err);

    if (err.response.data.status === 'fail' && err.response.status !== 401) {
    }
    return err;
  }
});

const getRecommendedGames = createAsyncThunk('/apps/games/get_recommended_games', async (payload, thunkAPI) => {
  try {
    const { data } = await axios.get(`/admin/game/get_recommended_games?cursor=${payload?.cursor ?? 0}`, payload);
    // console.log("stocker stor", data);

    if (data.status !== 'success') {
      toast.error(data.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data.status === 'success') {
      // toast.success(data.message);
      await thunkAPI.dispatch(setRecommendedGames(data?.data?.games));
      return data;
    }
  } catch (err) {
    toast.error(err);
    console.log(err);

    if (err.response.data.status === 'fail' && err.response.status !== 401) {
    }
    return err;
  }
});

export const getDashboardData = createAsyncThunk('/admin/dashboard', async (payload, thunkAPI) => {
  try {
    const { data } = await axios.get('admin/general/dashboard', payload);
    console.log('register', data);

    if (data.status !== 'success') {
      toast.error(data.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data.status === 'success') {
      // toast.success(data.message);
      await thunkAPI.dispatch(setDashboardSummary(data.data));
      return data;
    }
  } catch (err) {
    toast.error(err);
    console.log(err);

    if (err.response.data.status === 'fail' && err.response.status !== 401) {
    }
    return err;
  }
});

const getUsers = createAsyncThunk('get_all_user?cursor=0', async (payload, thunkAPI) => {
  try {
    const { data } = await axios.get(`admin/user/get_all_user?cursor=${payload?.cursor ?? 0}`, payload);
    console.log('register', data);

    if (data.status !== 'success') {
      toast.error(data.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data.status === 'success') {
      // toast.success(data.message);
      await thunkAPI.dispatch(setUsers(data.data));
      return data;
    }
  } catch (err) {
    toast.error(err);
    console.log(err);

    if (err.response.data.status === 'fail' && err.response.status !== 401) {
    }
    return err;
  }
});
export const dashboard = createSlice({
  name: 'dashboard',
  initialState: {
    isAuth: false,
    loading: false,
    dashboard_summary: {},
    users: [],
    recommended_games: [],
    inStock: [],
  },
  reducers: {
    setInStock: (state, action) => {
      state.inStock = action.payload;
    },
    setDashboardSummary: (state, action) => {
      state.dashboard_summary = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setRecommendedGames: (state, action) => {
      state.recommended_games = action.payload;
    },
  },
  extraReducers: {
    [getGamesStock.pending]: (state) => {
      state.loading = true;
    },
    [getGamesStock.fulfilled]: (state) => {
      state.loading = false;
    },
    [getGamesStock.rejected]: (state) => {
      // localStorage.removeItem("token");
      state.loading = false;
      state.isAuth = false;
      state = null;
    },

    [getDashboardData.pending]: (state) => {
      state.loading = true;
    },
    [getDashboardData.fulfilled]: (state) => {
      state.loading = false;
    },
    [getDashboardData.rejected]: (state) => {
      state = state.initialState;
    },

    [getRecommendedGames.pending]: (state) => {
      state.loading = true;
    },
    [getRecommendedGames.fulfilled]: (state) => {
      state.loading = false;
    },
    [getRecommendedGames.rejected]: (state) => {
      state = state.initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDashboardSummary, setInStock, setUsers, setRecommendedGames } = dashboard.actions;

export const dashboardAPI = {
  getGamesStock,
  getDashboardData,
  getRecommendedGames,
  getUsers,
};

export default dashboard.reducer;
