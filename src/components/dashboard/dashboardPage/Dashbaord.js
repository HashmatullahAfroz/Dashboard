// import main react
import React from 'react'

// import components
import { Button, Search, OpenSideBar }  from './dashboardComponent/sidebarComponent/Input';
import { Sidebar }  from '../dashboardPage/dashboardComponent/Sidebar';
// import assets
import dashboard from './css/dashboard.module.css';

// export functions
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
						<OpenSideBar type='button' value='OpenSidebar' id='opensidebar' />
						<Search type='search' placeholder='search' id='search' />
						<span style={{fontSize: 'xx-large'}} >Dashboard</span>
						<Button type='button' value='Logout' onclick={setLogoutHandler}  />
					</div>
				</div>
			</div>
		</>
		)
}