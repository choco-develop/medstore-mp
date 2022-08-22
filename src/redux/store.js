import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];
const store = configureStore(
  {
    reducer: rootReducer,
  },
  composeWithDevTools(applyMiddleware(...middleware)),
);
export default store;
