import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';  // You will need to install 'uuid' package for generating unique ids

const initialState = {
  trips: [],
  loading: false,
  error: null
};

const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    addTrip: (state, action) => {
      const newTrip = {
        id: uuidv4(),
        events: action.payload.events,
        where: action.payload.whereData
      }
      state.trips.push(newTrip);
    },

    removeTrip: (state, action) => {
      state.trips = state.trips.filter(trip => trip.id !== action.payload.id);
    },

    setTrips: (state, action) => {
      state.trips = action.payload;
    },
  },
  // Optional: if using createAsyncThunk, you can also handle those actions here
  extraReducers: (builder) => {
    builder
      // and provide a default case if no other handlers matched
      .addDefaultCase((state, action) => {})
  },
});

export const { addTrip, removeTrip, setTrips } = tripSlice.actions;

export default tripSlice.reducer;
