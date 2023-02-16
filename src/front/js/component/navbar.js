import React from "react";
import { Link } from "react-router-dom";
import background from "../../img/fondo_portfolio.jpg"
import about from "../../img/about.jpg"

export const Navbar = () => {
	return (
		<>
			<div className="container-fluid" >
				<img src={background} className="img-fluid"/>
				<div className="mt-2">
				<nav className="nav nav-pills nav-fill">
					<button className="nav-link active" aria-current="page" href="#">Active</button>
					<a className="nav-link" href="#">Much longer nav link</a>
					<a className="nav-link" href="#">Link</a>
					<a className="nav-link disabled">Disabled</a>
				</nav>
				</div>
			</div>
		</>
	);
};
