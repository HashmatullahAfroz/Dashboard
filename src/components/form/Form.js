import React, { useState, useContext } from 'react';
import {Input, Button} from '../form_component/input/input';
import form_style from './css/form.module.css';
import { MyContext } from '../../App';
import { Error } from '../form_component/error/error';
export const Form = (props)=>{


	const [ user, setUser ] = useState('');
	const [ pass, setPass ] = useState('');
	const [ valid, setValid ] = useState(true);
	const context_api_fun = useContext( MyContext );

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
					console.log(error);
				}
		}
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



