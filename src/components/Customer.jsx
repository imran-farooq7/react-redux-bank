import { useSelector } from "react-redux";

const Customer = () => {
	const customerState = useSelector((state) => state.customer);
	// console.log(customerState, "customomerState");
	return (
		<div>
			<h2>👋 Welcome, {customerState.fullName}</h2>
		</div>
	);
};
export default Customer;
