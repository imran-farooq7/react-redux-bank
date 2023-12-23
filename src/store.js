import { createStore } from "redux";
const accountinitialState = {
	balance: 0,
	loan: 0,
	loanPurpose: "",
};

const customerInitialState = {
	fullName: "",
	nationalId: "",
	createdAt: "",
};
const accountReducer = (state = accountinitialState, action) => {
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
const deposit = (amount) => {
	return {
		type: "account/deposit",
		payload: amount,
	};
};
store.dispatch(deposit(1500));
console.log(store.getState());

const withdraw = (amount) => {
	return {
		type: "account/withdraw",
		payload: amount,
	};
};

store.dispatch(withdraw(500));
console.log(store.getState());

const requestLoan = (amount, purpose) => {
	return {
		type: "account/requestLoan",
		payload: {
			amount,
			purpose,
		},
	};
};

store.dispatch(requestLoan(2000, "buy new laptop"));
console.log(store.getState());

const payLoan = () => {
	return {
		type: "account/payLoan",
	};
};

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
