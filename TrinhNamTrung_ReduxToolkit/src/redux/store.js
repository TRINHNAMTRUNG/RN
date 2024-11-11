
import { configureStore } from '@reduxjs/toolkit';
import bikeReducer from './sliceBike';

const store = configureStore({
  reducer: {
    bikes: bikeReducer,
  },
});

export default store;
