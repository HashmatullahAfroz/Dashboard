// import main react
import  React  from 'react';
// import components
import { Form } from '../form/Form';
// import assets
import login from './css/login.module.css';

// export main function
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


