import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { element } from "prop-types";
import { Card } from "../component/card";
import { CreatePerson } from "../component/createPerson";
import { Link, useNavigate } from "react-router-dom";

export const Home = (props) => {
	const { store, actions } = useContext(Context);
	
	return (
		<>
			<div className="container text-center mt-5">
				<div className="container-fluid">
					<h1 className="color-title-first">-<b> MY PROFILE </b>-</h1>
					<div className="container border border-3 color-border-first rounded-pill p-4">
						<h1>Hello World!!</h1>
						<p>Hace ya unos años quedé sorprendida ante el encanto de la programación. Desde ese día decidí cual sería mi futuro laboral.</p>
						<p>Y hoy, aquí estoy, no sin esfuerzo, desarrollando mi primer porfolio para poder mostrar al mundo mi trabajo. Espero que os guste.</p>
						<p>Empezaré por dejar por aquí a la vista mi Curriculum:</p>
					</div>
					<h1 className="">About Me</h1>
					<h1 className="">Skills</h1>
					<div className="border border-2 m-0">
						<img src="https://img.icons8.com/color/480/html-5--v1.png" style={{height:100}}/>
						<h6>HTML5</h6>
					</div>
					<div className="border border-2 m-0">
						<img src="https://img.icons8.com/color/480/html-5--v1.png" style={{height:100}}/>
						<h6>HTML5</h6>
					</div>
				</div>
			</div>
		</>
	);
};