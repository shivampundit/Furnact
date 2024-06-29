import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Adjust the path as per your project structure

const store = configureStore({
  reducer: rootReducer,
  // Optionally add devTools and other configuration options
});

export default store;
