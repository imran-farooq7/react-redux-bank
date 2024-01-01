import { createSlice } from "@reduxjs/toolkit";

const accountinitialState = {
	balance: 0,
	loan: 0,
	loanPurpose: "",
};
const accountSlice = createSlice({
	name: "account",
	initialState: accountinitialState,
	reducers: {
		deposit: (state, action) => {
			state.balance = state.balance + action.payload;
		},
		withdraw: (state, action) => {
			state.balance = state.balance - action.payload;
		},
		requestLoan: {
			prepare: (amount, purpose) => {
				return {
					payload: {
						amount,
						purpose,
					},
				};
			},
			reducer: (state, action) => {
				state.loan = action.payload.amount;
				(state.loanPurpose = action.payload.purpose),
					(state.balance = state.balance + action.payload.amount);
			},
		},
		payloan: (state, action) => {
			state.balance = state.balance - state.loan;
			state.loan = 0;
			state.loanPurpose = "";
		},
	},
});
// export const accountReducer = (state = accountinitialState, action) => {
// 	if (action.type === "account/deposit") {
// 		return {
// 			...state,
// 			balance: state.balance + action.payload,
// 		};
// 	}
// 	if (action.type === "account/withdraw") {
// 		return {
// 			...state,
// 			balance: state.balance - action.payload,
// 		};
// 	}
// 	if (action.type === "account/requestLoan") {
// 		return {
// 			...state,
// 			loan: action.payload.amount,
// 			loanPurpose: action.payload.purpose,
// 			balance: state.balance + action.payload.amount,
// 		};
// 	}
// 	if (action.type === "account/payLoan") {
// 		return {
// 			...state,
// 			balance: state.balance - state.loan,
// 			loan: 0,
// 			loanPurpose: "",
// 		};
// 	}
// 	return state;
// };
// export const deposite = (amount, currency) => {
// 	if (currency === "USD") {
// 		return {
// 			type: "account/deposit",
// 			payload: amount,
// 		};
// 	}

// 	return async (dispatch, getState) => {
// 		const res = await fetch(
// 			`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
// 		);
// 		const data = await res.json();
// 		dispatch({
// 			type: "account/deposit",
// 			payload: data.rates.USD,
// 		});
// 	};
// };
// export const withdraw = (amount) => {
// 	return {
// 		type: "account/withdraw",
// 		payload: amount,
// 	};
// };
// export const requestLoan = (amount, purpose) => {
// 	return {
// 		type: "account/requestLoan",
// 		payload: {
// 			amount,
// 			purpose,
// 		},
// 	};
// };
// export const payLoan = () => {
// 	return {
// 		type: "account/payLoan",
// 	};
// };
export const { deposit, payloan, requestLoan, withdraw } = accountSlice.actions;
console.log(requestLoan(1000, "car"));
export default accountSlice.reducer;
