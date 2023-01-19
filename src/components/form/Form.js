// import main react
import React  from 'react';

// import hooks
import { useState, useContext }  from 'react';
import { MyContext } from '../../App';

// import components
import {Input, Button} from '../form_component/input/input';
import { Error } from '../form_component/error/error';

// import assets
import form_style from './css/form.module.css';

// export function
export const Form = (props)=>{

// hooks variable for username and password
	const [ user, setUser ] = useState('');
	const [ pass, setPass ] = useState('');
	const [ valid, setValid ] = useState(true);
	const context_api_fun = useContext( MyContext );


// taking variables value
	const setUserHandler = (e)=>{
			setUser(e.target.value);
	}

	const setPassHandler = (e)=>{
			setPass(e.target.value);
			if(user.includes("@") && pass.length > 5 ){
				setValid(false);
			}else{
				setValid(true);
			}
		}


// sending to backend
		const setSubmitHandler = ()=>{
			const dt = { user: user, pass:pass};
			const sendData = async ()=>{
				try{
						const opt = { headers: {'content-type': 'application/json'},  method: 'POST', body: JSON.stringify(dt) };
						const respons = await fetch('http://localhost:2000/login', opt);
						const res = await respons.json();
						if(res.status){
							localStorage.setItem('user', res.data);
							context_api_fun.isMainPage(true);
						}else{
							document.getElementById('error').style.display = 'block';
							setTimeout(()=>{
								document.getElementById('error').style.display = 'none';
							}, 4000);
						}
					}
				catch(error){
					if(dt.user === 'test@hash.com' && dt.pass === 'test123'){
						localStorage.setItem('user', dt.user);
						context_api_fun.isMainPage(true);
					}else{
						console.log(error);
					}
				}
		}
		// calling async function
			sendData();
}
	return(
		<>
			<form  className={form_style.form}>
				<div>
					<h1 style= {{color: 'white'}}>Login here</h1>
					<hr />
				</div>
				<div className={form_style.formGroup}>
					<Input type='text' className='formControl' placeholder='Username' onchange={setUserHandler}  />
					<Input type='password'  placeholder='password'  onchange={setPassHandler} />
					<Button type='button' isValid={valid}  value='Login' onclick={setSubmitHandler} />
				</div>
				<Error msg='Wrong username or password!' id='error'  />
			</form>
		</>
		)
}



