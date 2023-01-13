import React from 'react';
import Content from './assets/sidebarComponent.module.css';

export const Header = (props)=>{

	return(
		<>
			<img src='' alt={props.alt} className={`${Content.img}`} />
		</>
		)
}

export const Contents = (props)=>{

	return(
		<>	
			<li className={`${Content.nav_list}`}  >
				<a href={props.link} className={`${ Content.nav_link}`} style={{color: 'white'}}  >
					{props.listname}
				</a>
			</li>
		</>
	)
}

