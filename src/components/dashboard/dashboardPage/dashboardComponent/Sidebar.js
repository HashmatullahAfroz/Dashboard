// import main react
import React from "react";

// import hooks
import {useState, useEffect} from 'react';

// import components
import {Header, Contents} from './sidebarComponent/sidebarComponet';

// import assets
import sidebar_style from './sidebarComponent/assets/sidebar.module.css';

// export functions
export const Sidebar = ()=>{

	const [username, setUserName] = useState();

	const list = [
		{id: 'e1', listname: 'HomePage', link: ''},
		{id: 'e2', listname: 'Language', link: ''},
		{id: 'e3', listname: 'Programming', link: ''},
		{id: 'e4', listname: 'Front', link: ''},
		{id: 'e5', listname: 'Backend', link: ''},
		{id: 'e6', listname: 'Windows', link: ''},
		{id: 'e7', listname: 'Support', link: ''},
		{id: 'e8', listname: 'Contact', link: ''},
		{id: 'e9', listname: 'Data', link: ''},
	]

	// use effect for inside of dashboard
	useEffect(()=>{
		let user = localStorage.getItem('user');
		let new_user = user.split("@gmail.com").join('');
		setUserName(new_user);
	}, [ username ]);


	return(
			<>
				<nav>
					<header className={`${sidebar_style.comapany_name}`}>
						<h2>Company Logo</h2>
					</header>
					<div className={`${sidebar_style.sidebar_top}`} >
						<Header alt={username} />
					</div>
					<ul className={`${sidebar_style.sidebar}`}>
						{
							list.map((dt)=>{
								return(
									<Contents key={dt.id} listname={dt.listname} link={dt.link} />
								)
							})
						}
					</ul>
				</nav>
			</>
		)
}


