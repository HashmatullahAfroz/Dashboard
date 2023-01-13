import  React  from 'react';
import { Form } from '../form/Form';
import login from './css/login.module.css';


export const Login = (props)=>{
 
	return(
		<> 
		   <div className={`${login.container}`}>
				<div className={`${login.row}`}>
					<Form  />
				</div>
			</div> 
		</>
		)
}


