import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../utils/axios';
import { toast } from '../components/common/toast/toast';

// Async thunk to send notifications
export const sendNotification = createAsyncThunk('notifications/send', async (payload, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/apps/notification/notify', payload);
    toast.success('Notification sent successfully!');
    return data;
  } catch (err) {
    toast.error('Failed to send notification.');
    return rejectWithValue(err.response?.data || err.preventDefault());
  }
});

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendNotification.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendNotification.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(sendNotification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default notificationSlice.reducer;
