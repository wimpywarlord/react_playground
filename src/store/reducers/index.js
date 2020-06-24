import addTaskReducer from "./addTaskReducer";

import { combineReducers } from "redux";

const allReducer = combineReducers({
    addTask: addTaskReducer,
});

export default allReducer;
