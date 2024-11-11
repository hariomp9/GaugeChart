import { createSlice } from '@reduxjs/toolkit';

const gaugeSlice = createSlice({
  name: 'gauge',
  initialState: {
    chartValue: 25, // Set initial value to 50 as per the requirements
  },
  reducers: {
    setChartValue: (state, action) => {
      state.chartValue = action.payload;
    },
  },
});

export const { setChartValue } = gaugeSlice.actions;
export default gaugeSlice.reducer;
