// import main react
import React from 'react';

// import assets
import img from './assets/img/hash.jpg';
import sidebaerComponent from './assets/sidebarComponent.module.css';

// export function
export const Header = ({alt})=>{


	return(
		<>
			<img src={img} alt={alt} className={`${sidebaerComponent.img}`} />
			<span style={{marginLeft: '1rem'}} >{alt}</span>
		</>
		)
}

export const Contents = (props)=>{

	return(
		<>
			<li className={`${sidebaerComponent.nav_list}`}  >
				<a href={props.link} className={`${ sidebaerComponent.nav_link}`} style={{color: 'black'}}  >
					{props.listname}
				</a>
			</li>
		</>
	)
}
