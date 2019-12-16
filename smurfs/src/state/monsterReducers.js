// import * as reducers from "./reducers";
import { smurfReducer } from "./reducers";
import { combineReducers } from "redux";

export const monsterReducer = combineReducers({
  smurfs: smurfReducer
});