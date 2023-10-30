import { combineReducers } from "redux";
import tripReducer from "../tripSlice/tripReducer";

const rootReducer = combineReducers({ trips: tripReducer});

export default rootReducer;
