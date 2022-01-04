import { combineReducers } from "redux";
import auth from "./authentication/reducer";
import cars from './cars/reducer'
import insurance from './insurance/reducer'
import discount from './discount/reducer'


const rootReducer = combineReducers({
  auth: auth,
  cars: cars,
  insurance: insurance,
  discount: discount,
});

export default rootReducer;
