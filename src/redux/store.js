// import { configureStore } from '@reduxjs/toolkit';
// import gaugeReducer from './guageSlice';

// export const store = configureStore({
//   reducer: {
//   },
// });

// export default store;



import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import gaugeReducer from "./guageSlice"

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Gauge"], // Add the slices you want to persist here
};

const rootReducer = combineReducers({
    gauge: gaugeReducer,
  // Add more reducers here if needed
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types from redux-persist
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
