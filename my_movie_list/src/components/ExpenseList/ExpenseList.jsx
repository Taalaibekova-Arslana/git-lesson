import React from "react";
import Expense from "../../components/Expense/Expense";

const ExpenseList = ({ expenses }) => {
	return (
		<div className="expenseList">
			{expenses.map(({ id ,name,  img, year, janr  }) => {
				return <Expense key={id} name={name} img={img} year={ year} janr={ janr} />;
			})}
		</div>
	);
};

export default ExpenseList;
