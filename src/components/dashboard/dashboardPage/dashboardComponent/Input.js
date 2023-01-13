import React from "react";
import logout from "../css/input.module.css"

export  const Button = ({
		type,
		value,
		onclick
	})=>{

	return(
		<>
			<input type={type}   value={value} onClick={onclick} className={`${logout.btn}`} />
		</>
		)
}