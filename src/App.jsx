import { useSelector } from "react-redux";
import AccountOperation from "./components/AccountOperation";
import CreateCustomer from "./components/CreateCustomer";
import Customer from "./components/Customer";
import BalanceDisplay from "./components/BalanceDisplay";

const App = () => {
	const fullName = useSelector((state) => state.customer.fullName);
	return (
		<div>
			<h1>🏦 The React-Redux Bank ⚛️</h1>
			{fullName === "" ? (
				<CreateCustomer />
			) : (
				<>
					<BalanceDisplay />
					<Customer />
					<AccountOperation />
				</>
			)}
		</div>
	);
};
export default App;
