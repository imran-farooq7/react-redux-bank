import { createStore, combineReducers } from "redux";
import { accountReducer } from "./features/account/accountSlice";

const customerInitialState = {
	fullName: "",
	nationalId: "",
	createdAt: "",
};

const customerReducer = (state = customerInitialState, action) => {
	if (action.type === "customer/createCustomer") {
		return {
			...state,
			fullName: action.payload.name,
			nationalId: action.payload.nationalId,
			createdAt: action.payload.createdAt,
		};
	}
	if (action.type === "customer/updateCustomer") {
		return {
			...state,
			fullName: action.payload,
		};
	}

	return state;
};
const rootReducer = combineReducers({
	account: accountReducer,
	customer: customerReducer,
});
const store = createStore(rootReducer);
store.dispatch({ type: "account/deposit", payload: 1000 });
console.log(store.getState());
store.dispatch({ type: "account/withdraw", payload: 500 });
console.log(store.getState());
store.dispatch({
	type: "account/requestLoan",
	payload: {
		amount: 1000,
		purpose: "buy a car",
	},
});
console.log(store.getState());
store.dispatch({ type: "account/payLoan" });
console.log(store.getState());

store.dispatch(deposit(1500));
console.log(store.getState());

store.dispatch(withdraw(500));
console.log(store.getState());

store.dispatch(requestLoan(2000, "buy new laptop"));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());
const createCustomer = (fullName, nationalId) => {
	return {
		type: "customer/createCustomer",
		payload: {
			name: fullName,
			nationalId,
			createdAt: new Date().toISOString(),
		},
	};
};
const updateCustomer = (fullName) => {
	return {
		type: "customer/updateCustomer",
		payload: fullName,
	};
};
