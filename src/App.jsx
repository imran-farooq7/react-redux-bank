import AccountOperation from "./components/AccountOperation";
import CreateCustomer from "./components/CreateCustomer";
import Customer from "./components/Customer";

const App = () => {
	return (
		<div>
			<h1>🏦 The React-Redux Bank ⚛️</h1>
			<CreateCustomer />
			<Customer />
			<AccountOperation />
		</div>
	);
};
export default App;
