import React from "react";
import { Link } from "react-router-dom";
import background from "../../img/fondo_portfolio.jpg"


export const Navbar = () => {
	return (
		<>
			<div className="container-fluid" >
				<img src={background} className="img-fluid"/>
				<div className="mt-2">
				<nav className="nav nav-pills nav-fill justify-content-end">
					<button className="btn color-first m-2" aria-current="page" href="#">Active</button>
					<button className="btn color-second m-2" aria-current="page" href="#">Active</button>
					<button className="btn color-first m-2" aria-current="page" href="#">Active</button>
					<button className="btn color-second m-2" aria-current="page" href="#">Active</button>
				</nav>
				</div>
			</div>
		</>
	);
};
