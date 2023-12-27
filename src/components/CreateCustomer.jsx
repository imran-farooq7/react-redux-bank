import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "../features/customer/customerSlice";

const CreateCustomer = () => {
	const [name, setName] = useState("");
	const [id, setId] = useState("");
	const dispatch = useDispatch();

	const handleClick = () => {
		if (!name && !id) return;
		dispatch(createCustomer(name, id));
	};
	return (
		<div>
			<h2>Create New Customer</h2>
			<div className="inputs">
				<div>
					<label htmlFor="name">Customer Full Name</label>
					<input
						type="text"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="id">National ID</label>
					<input
						type="text"
						id="id"
						value={id}
						onChange={(e) => setId(e.target.value)}
					/>
				</div>
				<button onClick={handleClick}>Create new customer</button>
			</div>
		</div>
	);
};
export default CreateCustomer;
