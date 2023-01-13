import React from 'react';
import error from '../assets/css/error.module.css';

export const Error = (props)=>{
	return(
		<>
			<div className={`${error.error}`}  id={props.id}>
				<span>{props.msg}</span>
			</div>
		</>
		)
} 

