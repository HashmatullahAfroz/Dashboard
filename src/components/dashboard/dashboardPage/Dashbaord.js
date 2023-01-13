import React from 'react'
import { Button }  from '../dashboardPage/dashboardComponent/Input';
import { Sidebar }  from '../dashboardPage/dashboardComponent/Sidebar';
import dashboard from './css/dashboard.module.css';

export const Dashboard = ()=>{
	const setLogoutHandler = ()=>{
		localStorage.setItem('logged', 0);
		window.location.reload();
	}
	return(
		<>
			<div className={`${dashboard.container_fluid}`}> 
				<div className={`${dashboard.row}`}>
					<div className={`${dashboard.col_md_4}`}>
						<Sidebar />
					</div>
					<div className={`${dashboard.col_md_8}`}>
						<span style={{fontSize: 'xx-large'}} >Dashboard</span>
						<Button type='button' value='Logout' onclick={setLogoutHandler}   />
					</div>
				</div>
			</div>
		</>
		)
}