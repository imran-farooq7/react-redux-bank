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
			loan: action.payload,
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
