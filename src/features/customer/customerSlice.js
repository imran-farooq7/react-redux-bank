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

export const createCustomer = (fullName, nationalId) => {
	return {
		type: "customer/createCustomer",
		payload: {
			name: fullName,
			nationalId,
			createdAt: new Date().toISOString(),
		},
	};
};
export const updateCustomer = (fullName) => {
	return {
		type: "customer/updateCustomer",
		payload: fullName,
	};
};

export default customerReducer;
