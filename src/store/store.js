import { combineReducers, createStore } from "redux";
import productsReducer from '../store/Products/Products.reducer';

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);

export default store;