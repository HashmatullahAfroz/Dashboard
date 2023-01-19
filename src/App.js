// import main react
import  React from "react";

// import Hooks
import { useState, useEffect  } from 'react';

// import components
import {Login} from './components/login/Login';
import { Dashboard } from "./components/dashboard/dashboardPage/Dashbaord";

// create variable hooks
export const MyContext = React.createContext();

// Main function
export const App = ()=>{

// useEffect for login
	const [isLogged, setIsLogged] = useState(false);
	useEffect(()=>{
		let logged = localStorage.getItem('logged');
		logged === '1' ? setIsLogged(true)  : setIsLogged(false);
		if(logged === '0'){
			alert('for testing username is test@hash.com and password is test123');
		}
	}, []);


// condition for showin gmain page
const isMainPage = (checkLogged)=>{
		setIsLogged(checkLogged);
		localStorage.setItem('logged', 1);
	 }



	return(
		<>
			{isLogged  ? <Dashboard /> :  <MyContext.Provider  value={{isMainPage: isMainPage}} > <Login /></MyContext.Provider> }
		</>
		)
}

