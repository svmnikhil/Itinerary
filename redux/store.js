// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import eventReducer from './slices/eventSlice/eventReducer';
import tripReducer from './slices/tripSlice/tripReducer';

const store = configureStore({
  reducer: {
    event: eventReducer,
    trip: tripReducer,
  }
});

export default store;
