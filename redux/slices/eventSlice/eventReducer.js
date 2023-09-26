// redux/slices/eventSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
  loading: false,
  error: null
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
    removeEvent: (state, action) => {
      state.events = state.events.filter(event => event.id !== action.payload.id);
    },
    // ... other event reducers
  }
});

export const { addEvent, removeEvent } = eventSlice.actions;

export default eventSlice.reducer;
