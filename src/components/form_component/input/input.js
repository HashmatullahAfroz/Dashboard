import React from 'react';
import form_input from '../assets/css/input.module.css';

export const Input = ({
	type, 
	className,
	placeholder,
	onchange,
})=>{


return (
	<>
		<input type={type} className={`${form_input.formControl}`} placeholder={placeholder} onChange={onchange} />
	</>
	)
} 

export const Button = ({
		type,
		value,
		onclick,
		isValid,
		style
	})=>{

	return(
		<>
			<input type={type} className={`${isValid ? form_input.disable : form_input.btn}`} disabled={isValid ? 'disabled' : ''} value={value} onClick={onclick} />
		</>
		)
}
