import React from "react";
import { Link } from "react-router-dom";
import background from "../../img/fondo_portfolio.jpg"


export const Navbar = () => {
	return (
		<>
			<div className="container-fluid" >
				<img src={background} className="img-fluid"/>
				<div className="mt-2">
					<nav className="nav nav-pills nav-fill justify-content-center">
						<a className="btn color-first m-2 rounded-pill m-2" aria-current="page" href="#profile"><b>PROFILE</b></a>
						<a className="btn color-second m-2 rounded-pill m-2" aria-current="page" href="#skills"><b>SKILLS</b></a>
						<a className="btn color-first m-2 rounded-pill m-2" aria-current="page" href="#proyect"><b>PROYECT</b></a>
						<a className="btn color-second m-2 rounded-pill m-2" aria-current="page" href="#contact"><b>CONTACT</b></a>
					</nav>
				</div>
			</div>
		</>
	);
};
