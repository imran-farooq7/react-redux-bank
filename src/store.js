import { createStore, combineReducers, applyMiddleware } from "redux";
import { accountReducer } from "./features/account/accountSlice";
import customerReducer from "./features/customer/customerSlice";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
	account: accountReducer,
	customer: customerReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
