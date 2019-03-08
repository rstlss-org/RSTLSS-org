import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import {
  responsiveStateReducer,
  responsiveStoreEnhancer
} from "redux-responsive";
import naviReducer from "./navi/reducer";

const reducers = {
  navi: naviReducer,
  browser: responsiveStateReducer
};

const middleware = [logger];

const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(responsiveStoreEnhancer, applyMiddleware(...middleware))
);

export default store;
