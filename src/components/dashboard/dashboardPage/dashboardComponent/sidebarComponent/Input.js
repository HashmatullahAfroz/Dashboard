// import main react
import React from "react";
// import assets
import dash_input from "./assets/input.module.css";

// below export functions
export  const Button = ({
		type,
		value,
		onclick
	})=>{

	return(
		<>
			<input type={type}   value={value} onClick={onclick} className={`${dash_input.btn}`} />
		</>
		)
}

export const Search = (props)=>{

	return(
		<input type={props.Search} className={`${dash_input.search}`} placeholder={props.placeholder} id={props.id } />
	)


}

export const OpenSideBar = (props)=>{
	return (
		<input type={props.type} className={`${dash_input.btn}`} id={props.id} value={props.value} style={{display: 'none'}} />
	)
}