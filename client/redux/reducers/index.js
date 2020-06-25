import { combineReducers } from "redux";
import currentUser from "./currentUser";
import tweets from "./tweets";

var rootReducer = combineReducers({
	currentUser,
	tweets,
});

export default rootReducer;
