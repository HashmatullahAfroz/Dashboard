import  React from "react";
import { useState, useEffect  } from 'react';
import {Login} from './components/login/Login';
import { Dashboard } from "./components/dashboard/dashboardPage/Dashbaord";
export const MyContext = React.createContext();

export const App = ()=>{

	
	const [isLogged, setIsLogged] = useState(false); 
 
	useEffect(()=>{
		let logged = localStorage.getItem('logged');
		if(logged == 1){
			setIsLogged(true);
		}else{
			setIsLogged(false);
		}
	}, [isLogged]); 

	 
const isMainPage = (checkLogged)=>{
	 	setIsLogged(checkLogged); 
	 	 localStorage.setItem('logged', 1);
	 }



	return(
		<>
			{isLogged  ?	 <Dashboard />  :  <MyContext.Provider  value={{isMainPage: isMainPage}} > <Login /></MyContext.Provider> }
		</>
		)
}

