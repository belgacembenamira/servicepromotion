/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 14/04/2023 - 06:12:21
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import { applyMiddleware, compose, createStore } from "redux";
import routReducer from "../reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  routReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
