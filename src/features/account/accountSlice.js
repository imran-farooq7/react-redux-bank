const accountinitialState = {
	balance: 0,
	loan: 0,
	loanPurpose: "",
};
export const accountReducer = (state = accountinitialState, action) => {
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
export const deposit = (amount) => {
	return {
		type: "account/deposit",
		payload: amount,
	};
};
export const withdraw = (amount) => {
	return {
		type: "account/withdraw",
		payload: amount,
	};
};
export const requestLoan = (amount, purpose) => {
	return {
		type: "account/requestLoan",
		payload: {
			amount,
			purpose,
		},
	};
};
export const payLoan = () => {
	return {
		type: "account/payLoan",
	};
};
