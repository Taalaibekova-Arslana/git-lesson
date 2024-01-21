import React from "react";
import "./Input.css";

const Input = ({ type, text, value, className, setData }) => {
	return (
		<input
			type={type}
			placeholder={text}
			value={value}
			onChange={(event) => {
				setData(event.target.value);
			}}
			className={className}
		/>
	);
};

export default Input;
