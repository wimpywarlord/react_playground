import addTaskReducer from "./addTask";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    tasks: addTaskReducer,
});

export default allReducers;
