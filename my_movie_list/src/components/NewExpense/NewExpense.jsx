import { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const NewExpense = ({ expenses, setExpenses, setFiltreExpence }) => {
	const [expenseName, setExpenseName] = useState("");
	const [expenseImg, setExpenseImg] = useState("");
	const [expenseYear, setExpenseYear] = useState("");
	const [expenseJanr, setExpenseJanr] = useState("");

	const addMovies = () => {
		const addMoviesObj = {
			name: expenseName,
			img: expenseImg,
			year: expenseYear,
			janr: expenseJanr,
			id: Math.random(),
		};
		setExpenses([...expenses, addMoviesObj]);
		setFiltreExpence([...expenses, addMoviesObj]);
		setExpenseName("");
		setExpenseImg("");
		setExpenseYear("");
		setExpenseJanr("");
	};

	const filrteExpence = (janr) => {
		const upExpenseFilter = expenses.filter((item) => item.janr === janr);
		setFiltreExpence(upExpenseFilter);
	};

	return (
		<div>
			<Button onClick={() => filrteExpence("Комедия")} text="Комедия" />
			<Button onClick={() => filrteExpence("Ужастик")} text="Ужастик" />
			<Button onClick={() => filrteExpence("Драма")} text="Драма" />
			<Button onClick={() => filrteExpence("Боевик")} text="Боевик" />
			<form
				onSubmit={(event) => {
					event.preventDefault();
					addMovies();
				}}>
				<div className="inputBox">
					<Input
						text="movie name"
						type="text"
						value={expenseName}
						className="movieName"
						setData={setExpenseName}
					/>
					<Input
						text="movie image"
						type="text"
						value={expenseImg}
						className="movieImg"
						setData={setExpenseImg}
					/>
					<Input
						text="movie year"
						type="text"
						value={expenseYear}
						className="movieYear"
						setData={setExpenseYear}
					/>
					<Input
						text="movie janr"
						type="text"
						value={expenseJanr}
						className="movieJanr"
						setData={setExpenseJanr}
					/>
				</div>
				<Button type="submit" text="Add" />
				<Button text="Delete All" />
			</form>
		</div>
	);
};

export default NewExpense;
