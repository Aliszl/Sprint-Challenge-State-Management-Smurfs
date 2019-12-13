import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import smurfReducer from "./reducers";
import {monsterReducer} from "./monsterReducers"


const initialState = {};

const middleWare = [thunk];

const store = createStore(monsterReducer, initialState, applyMiddleware(...middleWare));

export default store;
