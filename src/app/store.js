import { configureStore } from '@reduxjs/toolkit';
import channelReducer from '../features/counter/channelSlice';


export const store = configureStore({
  reducer: {
    channel: channelReducer, 
  }
})