import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from '../redux/redusers';
import { cartLocalStorage } from './middlewares/cartLocalStorage';


export default () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware().concat([
      cartLocalStorage
    ]),
    devTools: true,
  })
};