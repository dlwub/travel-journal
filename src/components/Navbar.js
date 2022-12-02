import React from 'react'
import img from '../images/img.png' 

function Navbar(){
	return(
		<nav className="navbar">
			<img src={img} className="navbar-logo" />
			<span>my travel portal</span>
		</nav>
	)
}

export default Navbar