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
						<Contents listname='HomePage' link=''  />
						<Contents listname='Language' link=''  />
						<Contents listname='Programming' link=''  />
						<Contents listname='Front-End' link=''  />
						<Contents listname='Backend' link=''  />
						<Contents listname='Windows' link=''  />
						<Contents listname='Support' link=''  />
						<Contents listname='Contact Us' link=''  />
						<Contents listname='Data Source' link=''  />
					</ul>
				</nav>
			</>
		)
}


