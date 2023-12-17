import { useState } from "react";

const AccountOperation = () => {
	const [deposit, setDeposite] = useState("");
	const [currency, setCurrency] = useState("USD");
	const [withdraw, setWithdraw] = useState("");
	const [loanAmount, setLoanAmount] = useState("");
	const [loanPurpose, setLoanPurpose] = useState("");
	const handleDeposit = () => {};
	const handleWithdraw = () => {};
	const handleRequestLoan = () => {};
	const handlePayLoan = () => {};
	return (
		<div className="inputs">
			<div>
				<div>
					<label htmlFor="deposit">Deposite</label>
					<input
						type="number"
						id="deposit"
						value={deposit}
						onChange={(e) => setDeposite(e.target.value)}
					/>
				</div>
				<select value={currency} onChange={(e) => setCurrency(e.target.value)}>
					<option value="US Dollar">US Dollar</option>
					<option value="Pound">Pound</option>
					<option value="Euro">Euro</option>
				</select>
				<button onClick={handleDeposit}>Deposit</button>
			</div>
			<div>
				<label htmlFor="id">Withdraw</label>
				<input
					type="text"
					id="id"
					value={withdraw}
					onChange={(e) => setWithdraw(e.target.value)}
				/>
				<button onClick={handleWithdraw}>Withdraw</button>
			</div>
			<div>
				<label htmlFor="id">Request Loan</label>
				<input
					type="number"
					id="id"
					value={loanAmount}
					onChange={(e) => setLoanAmount(e.target.value)}
				/>
				<label htmlFor="id">Request Loan</label>
				<input
					type="text"
					id="id"
					value={loanPurpose}
					onChange={(e) => setLoanPurpose(e.target.value)}
				/>
				<button onClick={handleRequestLoan}>Request Loan</button>
			</div>
			<div>
				<span>Pay back $X</span>
				<button onClick={handlePayLoan}>Pay loan</button>
			</div>
		</div>
	);
};
export default AccountOperation;
