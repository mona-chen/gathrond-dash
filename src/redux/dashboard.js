/* eslint-disable jsx-a11y/alt-text */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../utils/axios';
// import { getCookie } from '../utils/helper/Helper';
import { toast } from '../components/common/toast/toast';
import { setCookie } from '../utils/helper/Helper';

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

const getUserPurchase = createAsyncThunk('/admin/user/get_user_subscription?user_id', async (payload, thunkAPI) => {
  try {
    const { data } = await axios.get(`admin/user/get_user_purchase?user_id=${payload?.id ?? 0}`, payload);
    // console.log("stocker stor", data);

    if (data.status !== 'success') {
      toast.error(data.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data.status === 'success') {
      // toast.success(data.message);
      await thunkAPI.dispatch(setSubscriptions(data?.data));
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

const updateUser = createAsyncThunk('/admin/user/update?user_id', async (payload, thunkAPI) => {
  try {
    const { data } = await axios.post(`admin/user/${payload?.url || 'update_user_info'}`, payload);
    // console.log("stocker stor", data);

    if (data.status !== 'success') {
      toast.error(data.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data.status === 'success') {
      toast.success(data.message);

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

const blockUnblock = createAsyncThunk('/admin/user/update?user_id', async (payload, thunkAPI) => {
  try {
    const { data } = await axios.get(`admin/user/${payload?.url || 'block_user'}?user_id=${payload?.user_id}`);
    // console.log("stocker stor", data);

    if (data.status !== 'success') {
      toast.error(data.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data.status === 'success') {
      toast.success(data.message);

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

const getUserGames = createAsyncThunk('/admin/user/get_user_games?user_id', async (payload, thunkAPI) => {
  try {
    const { data } = await axios.get(`/admin/user/get_user_games?user_id=${payload?.id ?? 0}`, payload);
    // console.log("stocker stor", data);

    if (data.status !== 'success') {
      toast.error(data.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data.status === 'success') {
      // toast.success(data.message);
      await thunkAPI.dispatch(setUserGames(data?.data));
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

const getSwitchedGames = createAsyncThunk('/admin/user/get_user_switched_games?user_id', async (payload, thunkAPI) => {
  try {
    const { data } = await axios.get(`/admin/user/get_user_switched_games?user_id=${payload?.id ?? 0}`, payload);
    // console.log("stocker stor", data);

    if (data.status !== 'success') {
      toast.error(data.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data.status === 'success') {
      // toast.success(data.message);
      await thunkAPI.dispatch(setUserSwitchedGames(data?.data));
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
    const { data } = await axios.get(
      `admin/user/${payload?.url || '/get_all_user'}?cursor=${payload?.cursor ?? 0}`,
      payload,
    );
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

const getAllGames = createAsyncThunk('get_all_user?cursor=0', async (payload, thunkAPI) => {
  try {
    const { data } = await axios.get(
      `admin/game/${payload.url || 'get_all_games'}?cursor=${payload?.cursor ?? 0}`,
      payload,
    );

    if (data.status !== 'success') {
      toast.error(data.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data.status === 'success') {
      // toast.success(data.message);
      await thunkAPI.dispatch(setAllGames(data.data));
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

const getAllUserGames = createAsyncThunk('get_all_user_games?cursor=0', async (payload, thunkAPI) => {
  try {
    const { data } = await axios.get(
      `admin/user/${payload.url || 'get_all_user_games'}?cursor=${payload?.cursor ?? 0}`,
      payload,
    );

    if (data.status !== 'success') {
      toast.error(data.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data.status === 'success') {
      // toast.success(data.message);
      await thunkAPI.dispatch(setAllUserGames(data.data.games));
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

const getAllMessages = createAsyncThunk('admin/chat/get_all_message', async (payload, thunkAPI) => {
  try {
    const { data } = await axios.get(
      `admin/chat/${payload?.url || '/get_all_message'}?cursor=${payload?.cursor ?? 0}`,
      payload,
    );

    if (data?.status !== 'success') {
      toast.error(data?.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data?.status === 'success') {
      // toast.success(data.message);
      await thunkAPI.dispatch(setMessages(data?.data));
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

const getAMessage = createAsyncThunk('admin/chat/get_all_message', async (payload, thunkAPI) => {
  try {
    const { data } = await axios.get(
      `admin/chat/${payload?.url || '/get_user_message'}?user_id=${payload?.user_id}&cursor=${payload?.cursor ?? 0}`,
      payload,
    );

    if (data.status !== 'success') {
      toast.error(data.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data.status === 'success') {
      // toast.success(data.message);
      await thunkAPI.dispatch(setUserMessage(data?.data));
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

const getCategory = createAsyncThunk('get_category', async (payload, thunkAPI) => {
  try {
    const { data } = await axios.get(`admin/game/get_category`, payload);

    if (data.status !== 'success') {
      toast.error(data.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data.status === 'success') {
      // toast.success(data.message);
      await thunkAPI.dispatch(setCategories(data.data));
      setCookie('categories', JSON.stringify(data.data), 5000);
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
const getGenre = createAsyncThunk('get_category', async (payload, thunkAPI) => {
  try {
    const { data } = await axios.get(`admin/game/get_genre`, payload);

    if (data.status !== 'success') {
      toast.error(data.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data.status === 'success') {
      // toast.success(data.message);
      await thunkAPI.dispatch(setGenres(data.data));
      setCookie('genres', JSON.stringify(data.data), 5000);
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
const getGameType = createAsyncThunk('get_type', async (payload, thunkAPI) => {
  try {
    const { data } = await axios.get(`admin/game/get_game_type`, payload);

    if (data.status !== 'success') {
      toast.error(data.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data.status === 'success') {
      // toast.success(data.message);
      await thunkAPI.dispatch(setGameType(data.data));
      setCookie('game_types', JSON.stringify(data.data), 5000);
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
const upload = createAsyncThunk('get_category', async (payload, thunkAPI) => {
  try {
    const { data } = await axios.post(`apps/aws/upload_file`, payload);

    if (data.status !== 'success') {
      toast.error(data.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data.status === 'success') {
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

const updateItem = createAsyncThunk('update_item', async (payload, thunkAPI) => {
  try {
    const { data } = await axios.post(`admin/game/update_${payload.type}`, payload.data);

    if (data.status !== 'success') {
      toast.error(data.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data.status === 'success') {
      toast.success(data.message);
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

const addItem = createAsyncThunk('add_item', async (payload, thunkAPI) => {
  try {
    const data = await axios.post(`admin/game/add_${payload.type}`, payload.data);

    if (data?.data?.status !== 'success') {
      toast.error(data?.data?.message, {
        // theme: 'colored'
      });
      return data?.data;
    }
    if (data?.data?.status === 'success') {
      toast.success(data?.data?.message);
      return data?.data;
    }
  } catch (err) {
    toast.error(err);
    console.log(err);

    if (err.response?.data.status === 'fail' && err.response.status !== 401) {
    }
    return err;
  }
});

const replyMessages = createAsyncThunk('reply-messages', async (payload, thunkAPI) => {
  try {
    const { data } = await axios.post(`/admin/chat/admin_reply`, payload);

    if (data.status !== 'success') {
      toast.error(data.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data.status === 'success') {
      // toast.success(data.message);
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

const readMessage = createAsyncThunk('reply-messages', async (payload, thunkAPI) => {
  try {
    const { data } = await axios.post(`/admin/chat/read_status`, { user_id: payload });

    if (data.status !== 'success') {
      return data;
    }
    if (data.status === 'success') {
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
const deleteItem = createAsyncThunk('delete_item', async (payload, thunkAPI) => {
  try {
    const { data } = await axios.post(`admin/game/delete_${payload.type}`, payload.data);

    if (data.status !== 'success') {
      toast.error(data.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data.status === 'success') {
      toast.success(data.message);
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

const getPlatformSubscriptions = createAsyncThunk(`get_subscriptions`, async (payload, thunkAPI) => {
  try {
    const data = await axios.get(
      `admin/trades/${payload.url || 'get_subscriptions'}&cursor=${payload?.cursor ?? 0}`,
      payload,
    );

    if (data?.data?.status !== 'success') {
      toast.error(data?.data?.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data?.data?.status === 'success') {
      // toast.success(data.message);
      await thunkAPI.dispatch(setAllSubscriptions(data.data?.data));
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

const getPlatformSwitchedGames = createAsyncThunk(`get_switched_games`, async (payload, thunkAPI) => {
  try {
    const data = await axios.get(
      `admin/trades/${payload.url || 'get_switched_games?cursor=0'}&cursor=${payload.cursor}`,
      payload,
    );

    if (data?.data?.status !== 'success') {
      toast.error(data?.data?.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data?.data?.status === 'success') {
      // toast.success(data.message);
      await thunkAPI.dispatch(setPlatformSwitches(data.data?.data));
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

const getPlatformPurchasedGames = createAsyncThunk(`get_purchased_games`, async (payload, thunkAPI) => {
  try {
    const data = await axios.get(
      `admin/trades/${payload.url || 'get_purchased_games?order_type=0&'}cursor=${payload?.cursor ?? 0}`,
      payload,
    );

    if (data?.data?.status !== 'success') {
      toast.error(data?.data?.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data?.data?.status === 'success') {
      // toast.success(data.message);
      await thunkAPI.dispatch(setPlatformPurchases(data.data?.data));
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

const searchPlatformPurchases = createAsyncThunk(`search_purchase_games`, async (payload, thunkAPI) => {
  try {
    const data = await axios.get(
      `admin/trades/${payload.url || 'search_purchase_games?'}cursor=${payload?.cursor ?? 0}&search_key=${payload?.q}`,
      payload,
    );

    if (data?.data?.status !== 'success') {
      toast.error(data?.data?.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data?.data?.status === 'success') {
      // toast.success(data.message);
      await thunkAPI.dispatch(setPlatformPurchases(data.data?.data));
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

const searchPlatformSwitches = createAsyncThunk(`search_switched_games`, async (payload, thunkAPI) => {
  try {
    const data = await axios.get(
      `admin/trades/${payload.url || 'search_switched_games'}?cursor=${payload?.cursor ?? 0}&search_key=${payload?.q}`,
      payload,
    );

    if (data?.data?.status !== 'success') {
      toast.error(data?.data?.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data?.data?.status === 'success') {
      // toast.success(data.message);
      console.log(data.data?.data);
      await thunkAPI.dispatch(setPlatformSwitches(data.data?.data));
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

const searchPlatformSubscriptions = createAsyncThunk(`search_subscription`, async (payload, thunkAPI) => {
  try {
    const data = await axios.get(
      `admin/trades/search_subscription?cursor=${payload?.cursor ?? 0}&search_key=${payload?.q}`,
      payload,
    );

    if (data?.data?.status !== 'success') {
      toast.error(data?.data?.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data?.data?.status === 'success') {
      // toast.success(data.message);
      await thunkAPI.dispatch(setAllSubscriptions(data.data?.data));
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

const updatePlatformTrades = createAsyncThunk(`update_order_status`, async (payload, thunkAPI) => {
  try {
    const data = await axios.post(`admin/trades/${payload.url || 'reject_user_trade'}`, payload);

    if (data?.data?.status !== 'success') {
      toast.error(data?.data?.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data?.data?.status === 'success') {
      toast.success(data?.data?.message);
      // await thunkAPI.dispatch(setAllSubscriptions(data.data?.data));
      return data;
    }
  } catch (err) {
    toast.error(err);
    // console.log(err);

    if (err.response.data.status === 'fail' && err.response.status !== 401) {
    }
    return err;
  }
});

const getBankLists = createAsyncThunk(`admin/transfer/get_bank_lists`, async (payload, thunkAPI) => {
  try {
    const data = await axios.get(`admin/transfer/get_bank_list`, payload);

    if (data?.data?.status !== 'success') {
      toast.error(data?.data?.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data?.data?.status === 'success') {
      // toast.success(data?.data?.message);
      await thunkAPI.dispatch(setBankList(data.data?.data));
      return data;
    }
  } catch (err) {
    toast.error(err);
    // console.log(err);

    if (err.response.data.status === 'fail' && err.response.status !== 401) {
    }
    return err;
  }
});

const getTransactions = createAsyncThunk(`admin/transfer/get_transfer_tranx`, async (payload, thunkAPI) => {
  try {
    const data = await axios.get(`admin/transfer/get_transfer_tranx`, payload);

    if (data?.data?.status !== 'success') {
      // toast.error(data?.data?.message, {
      //   // theme: 'colored'
      // });
      return data;
    }
    if (data?.data?.status === 'success') {
      // toast.success(data?.data?.message);
      await thunkAPI.dispatch(setTransactions(data.data?.data));
      return data;
    }
  } catch (err) {
    toast.error(err);
    // console.log(err);

    if (err.response.data.status === 'fail' && err.response.status !== 401) {
    }
    return err;
  }
});

const sendMoney = createAsyncThunk(`/transfer/make_transfer`, async (payload, thunkAPI) => {
  try {
    const data = await axios.post(`admin/transfer/make_transfer`, payload);

    if (data?.data?.status !== 'success') {
      toast.error(data?.data?.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data?.data?.status === 'success') {
      toast.success(data?.data?.message);
      // await thunkAPI.dispatch(setBankList(data.data?.data));
      return data.data;
    }
  } catch (err) {
    toast.error(err);
    console.log(err);

    if (err.response.data.status === 'fail' && err.response.status !== 401) {
    }
    return err;
  }
});

const resolveAccountNo = createAsyncThunk(`/transfer/resolve_account`, async (payload, thunkAPI) => {
  try {
    const data = await axios.post(`admin/transfer/resolve_account`, payload);

    if (data?.data?.status !== 'success') {
      // toast.error(data?.data?.message, {
      //   // theme: 'colored'
      // });
      return data;
    }
    if (data?.data?.status === 'success') {
      // toast.success(data?.data?.message);
      // await thunkAPI.dispatch(setBankList(data.data?.data));
      return data.data;
    }
  } catch (err) {
    toast.error(err);
    console.log(err);

    if (err.response.data.status === 'fail' && err.response.status !== 401) {
    }
    return err;
  }
});

const makeTransfer = createAsyncThunk(`/transfer/make_transfer`, async (payload, thunkAPI) => {
  try {
    const data = await axios.post(`/transfer/make_transfer'}`, payload);

    if (data?.data?.status !== 'success') {
      toast.error(data?.data?.message, {
        // theme: 'colored'
      });
      return data;
    }
    if (data?.data?.status === 'success') {
      toast.success(data?.data?.message);
      // await thunkAPI.dispatch(setBankList(data.data?.data));
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
    subscriptions: [],
    users: [],
    genres: [],
    categories: [],
    recommended_games: [],
    user_games: [],
    user_switched_games: [],
    inStock: [],
    all_user_games: [],
    all_messages: [],
    transactions: [],
    messages: [],
    game_types: [],
    socket_events: [],
    all_subscriptions: [],
    all_switches: [],
    all_purchases: [],
    bank_list: [],
  },
  reducers: {
    setInStock: (state, action) => {
      state.inStock = action.payload;
    },
    setTransactions: (state, action) => {
      state.transactions = action.payload;
    },
    setDashboardSummary: (state, action) => {
      state.dashboard_summary = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setSubscriptions: (state, action) => {
      state.subscriptions = action.payload;
    },
    setAllGames: (state, action) => {
      state.all_games = action.payload;
    },

    setRecommendedGames: (state, action) => {
      state.recommended_games = action.payload;
    },
    setUserGames: (state, action) => {
      state.user_games = action.payload;
    },
    setUserSwitchedGames: (state, action) => {
      state.user_switched_games = action.payload;
    },
    setGenres: (state, action) => {
      state.genres = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setGameType: (state, action) => {
      state.game_types = action.payload;
    },
    setAllUserGames: (state, action) => {
      state.all_user_games = action.payload;
    },
    setMessages: (state, action) => {
      state.all_messages = action.payload;
    },

    setUserMessage: (state, action) => {
      state.messages = action.payload;
    },

    setSocketEvents: (state, action) => {
      state.socket_events = action.payload;
    },
    setAllSubscriptions: (state, action) => {
      state.all_subscriptions = action.payload;
    },
    setPlatformSwitches: (state, action) => {
      state.all_switches = action.payload;
    },
    setPlatformPurchases: (state, action) => {
      state.all_purchases = action.payload;
    },
    setBankList: (state, action) => {
      state.bank_list = action.payload;
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

    [getUserPurchase.pending]: (state) => {
      state.loading = true;
    },
    [getUserPurchase.fulfilled]: (state) => {
      state.loading = false;
    },
    [getUserPurchase.rejected]: (state) => {
      state = state.initialState;
    },

    [getUserGames.pending]: (state) => {
      state.loading = true;
    },
    [getUserGames.fulfilled]: (state) => {
      state.loading = false;
    },
    [getUserGames.rejected]: (state) => {
      state = state.initialState;
    },

    [getSwitchedGames.pending]: (state) => {
      state.loading = true;
    },
    [getSwitchedGames.fulfilled]: (state) => {
      state.loading = false;
    },
    [getSwitchedGames.rejected]: (state) => {
      state = state.initialState;
    },

    [getAllGames.pending]: (state) => {
      state.loading = true;
    },
    [getAllGames.fulfilled]: (state) => {
      state.loading = false;
    },
    [getAllGames.rejected]: (state) => {
      state = state.initialState;
    },

    [upload.pending]: (state) => {
      state.loading = true;
    },
    [upload.fulfilled]: (state) => {
      state.loading = false;
    },
    [upload.rejected]: (state) => {
      state = state.initialState;
    },

    [addItem.pending]: (state) => {
      state.loading = true;
    },
    [addItem.fulfilled]: (state) => {
      state.loading = false;
    },
    [addItem.rejected]: (state) => {
      state.loading = false;
    },

    [updateItem.pending]: (state) => {
      state.loading = true;
    },
    [updateItem.fulfilled]: (state) => {
      state.loading = false;
    },
    [updateItem.rejected]: (state) => {
      state.loading = false;
    },

    [deleteItem.pending]: (state) => {
      state.loading = true;
    },
    [deleteItem.fulfilled]: (state) => {
      state.loading = false;
    },
    [deleteItem.rejected]: (state) => {
      state.loading = false;
    },

    [updatePlatformTrades.pending]: (state) => {
      state.loading = true;
    },
    [updatePlatformTrades.fulfilled]: (state) => {
      state.loading = false;
    },
    [updatePlatformTrades.rejected]: (state) => {
      state.loading = false;
    },

    [getPlatformPurchasedGames.pending]: (state) => {
      state.loading = true;
    },
    [getPlatformPurchasedGames.fulfilled]: (state) => {
      state.loading = false;
    },
    [getPlatformPurchasedGames.rejected]: (state) => {
      state.loading = false;
    },

    [getPlatformSwitchedGames.pending]: (state) => {
      state.loading = true;
    },
    [getPlatformSwitchedGames.fulfilled]: (state) => {
      state.loading = false;
    },
    [getPlatformSwitchedGames.rejected]: (state) => {
      state.loading = false;
    },

    [getPlatformSubscriptions.pending]: (state) => {
      state.loading = true;
    },
    [getPlatformSubscriptions.fulfilled]: (state) => {
      state.loading = false;
    },
    [getPlatformSubscriptions.rejected]: (state) => {
      state.loading = false;
    },

    [updateUser.pending]: (state) => {
      state.loading = true;
    },
    [updateUser.fulfilled]: (state) => {
      state.loading = false;
    },
    [updateUser.rejected]: (state) => {
      state.loading = false;
    },
    [sendMoney.pending]: (state) => {
      state.loading = true;
    },
    [sendMoney.fulfilled]: (state) => {
      state.loading = false;
    },
    [sendMoney.rejected]: (state) => {
      state.loading = false;
    },

    [resolveAccountNo.pending]: (state) => {
      state.loading = true;
    },
    [resolveAccountNo.fulfilled]: (state) => {
      state.loading = false;
    },
    [resolveAccountNo.rejected]: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setDashboardSummary,
  setUserSwitchedGames,
  setUserGames,
  setSubscriptions,
  setInStock,
  setAllGames,
  setUsers,
  setTransactions,
  setGenres,
  setCategories,
  setGameType,
  setRecommendedGames,
  setUserMessage,
  setAllUserGames,
  setMessages,
  setSocketEvents,
  setAllSubscriptions,
  setPlatformSwitches,
  setPlatformPurchases,
  setBankList,
} = dashboard.actions;

export const dashboardAPI = {
  getGamesStock,
  getDashboardData,
  getRecommendedGames,
  getUserPurchase,
  getUsers,
  getSwitchedGames,
  getUserGames,
  getCategory,
  getAMessage,
  getGenre,
  getAllGames,
  getAllUserGames,
  upload,
  updateItem,
  deleteItem,
  addItem,
  getGameType,
  getAllMessages,
  replyMessages,
  getPlatformSubscriptions,
  getPlatformSwitchedGames,
  readMessage,
  getPlatformPurchasedGames,
  searchPlatformPurchases,
  searchPlatformSwitches,
  searchPlatformSubscriptions,
  updatePlatformTrades,
  updateUser,
  blockUnblock,
  getBankLists,
  sendMoney,
  resolveAccountNo,
  makeTransfer,
  getTransactions,
};

export default dashboard.reducer;
