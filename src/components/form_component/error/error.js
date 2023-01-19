// import main react
import React from 'react';
// import assets
import error from '../assets/css/error.module.css';

// export main function
export const Error = (props)=>{
	return(
		<>
			<div className={`${error.error}`}  id={props.id}>
				<span>{props.msg}</span>
			</div>
		</>
		)
}

