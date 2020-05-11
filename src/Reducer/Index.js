import { combineReducers } from "redux";
import uiReducer from "./Ui";
import reducerBills from "./Bill";

const Reducer = combineReducers({
	ui: uiReducer,
	bill: reducerBills,
});

export default Reducer;
