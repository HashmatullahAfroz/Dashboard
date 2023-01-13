import {React, useState, useEffect} from "react"; 
import {Header, Contents} from './sidebarComponent/sidebarComponet';

import sidebar from '../css/sidebar.module.css';

export const Sidebar = ()=>{

	const [username, setUserName] = useState();

	useEffect(()=>{
		let user = localStorage.getItem('user');
		let new_user = user.split("@gmail.com").join('');
		setUserName(new_user);
	}, [ username ]);
	


	return( 
			<>
				<nav>
					<div className={`${sidebar.navbar_top}`} >
						<Header alt={username} />
					</div>
					<ul className={`${sidebar.navbar}`}>
						<Contents listname='Dashboard' link=''  />
						<Contents listname='Jobs' link=''  />
						<Contents listname='Jobs' link=''  />
						<Contents listname='Jobs' link=''  />
						<Contents listname='Jobs' link=''  />
						<Contents listname='Jobs' link=''  />
						<Contents listname='Jobs' link=''  />
						<Contents listname='Jobs' link=''  />
						<Contents listname='Jobs' link=''  />
						<Contents listname='Jobs' link=''  />
						<Contents listname='Jobs' link=''  />
						<Contents listname='Logout' link=''  />
					</ul>
				</nav>
			</>
		)
}


