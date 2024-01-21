import React from "react";
import './Expense.css'

const Expense = ({ name, img, year, janr }) => {
	return (
		<div className="movieBox">
			<h1>{name}</h1>
			<img src={img} alt="image" />
			<p>{year}</p>
			<p>{janr}</p>
		</div>
	);
};

export default Expense;
