import  React from "react";
import { useState, useEffect  } from 'react';
import {Login} from './components/login/Login';
import { Dashboard } from "./components/dashboard/dashboardPage/Dashbaord";
export const MyContext = React.createContext();


export const App = ()=>{


	const [isLogged, setIsLogged] = useState(false);
	useEffect(()=>{
		let logged = localStorage.getItem('logged');
		logged === 1 ? setIsLogged(true)  : setIsLogged(false);
		if(logged === 0){
			alert('for testing username is test@hash.com and password is test123');
		}
	}, []);


const isMainPage = (checkLogged)=>{
	 	setIsLogged(checkLogged);
	 	 localStorage.setItem('logged', 1);
	 }



	return(
		<>
			{isLogged  ? <Dashboard />  :  <MyContext.Provider  value={{isMainPage: isMainPage}} > <Login /></MyContext.Provider> }
		</>
		)
}

