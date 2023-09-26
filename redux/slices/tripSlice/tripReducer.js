import { createSlice } from '@reduxjs/toolkit';

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
      state.trips.push(action.payload);
    },
    setTrips: (state, action) => {
      state.trips = action.payload;
    },
    // ... other reducers
  },
  // Optional: if using createAsyncThunk, you can also handle those actions here
  extraReducers: (builder) => {
    builder
      // and provide a default case if no other handlers matched
      .addDefaultCase((state, action) => {})
  },
});

export const { addTrip, setTrips } = tripSlice.actions;

export default tripSlice.reducer;
