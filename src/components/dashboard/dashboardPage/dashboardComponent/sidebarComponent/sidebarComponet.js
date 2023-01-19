// import main react
import React from 'react';

// import assets
import img from './assets/img/hash.jpg';
import sidebaerComponent from './assets/sidebarComponent.module.css';

// export function
export const Header = ({alt})=>{


	return(
		<>
			<a href='https://github.com/HashmatullahAfroz' target='blank' ><img src={img} alt={alt} className={`${sidebaerComponent.img}`} /></a>
			<b><span style={{marginLeft: '1rem'}} >{alt}</span></b>
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
