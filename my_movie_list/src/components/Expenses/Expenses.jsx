import React, { useState } from "react";
import NewExpense from "../NewExpense/NewExpense";
import ExpenseList from "../../components/ExpenseList/ExpenseList";

const Expenses = () => {
	const [expenses, setExpenses] = useState([]);
  const [filrteExpence , setFiltreExpence] = useState([])
	return (
		<div>
			<NewExpense expenses={expenses} setExpenses={setExpenses} setFiltreExpence={setFiltreExpence} />
			<ExpenseList expenses={filrteExpence}  />	
		</div>
	);
};

export default Expenses;
