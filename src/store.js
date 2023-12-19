import { createStore } from "redux";
const initialState = {
	balance: 0,
	loan: 0,
	loanPurpose: "",
};
const reducer = (state = initialState, action) => {
	if (action.type === "account/deposit") {
		return {
			...state,
			balance: state.balance + action.payload,
		};
	}
	if (action.type === "account/withdraw") {
		return {
			...state,
			balance: state.balance - action.payload,
		};
	}
	if (action.type === "account/requestLoan") {
		return {
			...state,
			loan: action.payload.amount,
			loanPurpose: action.payload.purpose,
			balance: state.balance + action.payload.amount,
		};
	}
	if (action.type === "account/payLoan") {
		return {
			...state,
			balance: state.balance - state.loan,
			loan: 0,
			loanPurpose: "",
		};
	}
	return state;
};
const store = createStore(reducer);
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
