import { createSlice } from '@reduxjs/toolkit';

const gaugeSlice = createSlice({
  name: 'gauge',
  initialState: {
    chartValue: 50, // Set initial value to 50 as per the requirements
  },
  reducers: {
    setGaugeValue: (state, action) => {
      state.chartValue = action.payload;
    },
  },
});

export const { setGaugeValue } = gaugeSlice.actions;
export default gaugeSlice.reducer;
