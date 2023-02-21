import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { element } from "prop-types";
import { Card } from "../component/card";
import { CardSkill } from "../component/cardSkill";
import { CreatePerson } from "../component/createPerson";
import { Link, useNavigate } from "react-router-dom";

export const Home = (props) => {
	const { store, actions } = useContext(Context);
	
	return (
		<>
			<div className="container text-center mt-5">
				<div className="container-fluid">
					<h1 className="color-title-first">-<b> MY PROFILE </b>-</h1>
					<div className="container border border-2 color-border-first rounded p-4">
						<h1>Hello World!!</h1>
						<p>Hace ya unos años quedé sorprendida ante el encanto de la programación. Desde ese día decidí cual sería mi futuro laboral.</p>
						<p>Y hoy, aquí estoy, no sin esfuerzo, desarrollando mi primer porfolio para poder mostrar al mundo mi trabajo. Espero que os guste.</p>
						<p>Empezaré por dejar por aquí a la vista mi Curriculum:</p>
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-3">
									<Card 
									frontColor={{backgroundColor:"#553583", color:"#FDB927", borderRadius: "15px"}}
									backColor={{backgroundColor:"#FDB927", color:"#552583", borderRadius: "15px"}}
									title="ESTUDIOS"
									body={
										<>
											<h3>4Geeks Academy</h3>
											<p>Full-Stack Software Developer</p>
											<h3>Desarrollador Aplicaciones Web</h3>
										</>
									}
									/>
								</div>
								<div className="col-3">
									<Card
									frontColor={{backgroundColor:"#FDB927", color:"#552583", borderRadius: "15px"}}
									backColor={{backgroundColor:"#552583", color:"#FDB927", borderRadius: "15px"}}
									title="EXPERIENCIA LABORAL"
									body={
										<>
											<h4>Desarrollador Web, SIB</h4>
											<p>Creación de landing. Actualización de webs.</p>
											<h4>Responsable BO, Vodafone</h4>
											<p>Intermediario entre Vodafone y comerciales directos. Gestión de clientes.</p>
										</>}
									/>
								</div>
							</div>
						</div>
					</div>
					<h1 className="color-title-second mt-5">-<b> SKILLS </b>-</h1>
					<div className="container border border-2 color-border-second rounded p-4">
						<div className="row justify-content-center">
							<div className="col">
								<CardSkill
									image="https://img.icons8.com/color/480/html-5--v1.png"
									title="HTML5"
								/>
							</div>
							<div className="col">
								<CardSkill
									image="https://img.icons8.com/color/512/css3.png"
									title="CSS"
								/>
							</div>
							<div className="col">
								<CardSkill
									image="https://img.icons8.com/color/512/javascript--v1.png"
									title="JS"
								/>
							</div>
							<div className="col">
								<CardSkill
									image="https://img.icons8.com/color/512/react-native.png"
									title="React"
								/>
							</div>
							<div className="col">
								<CardSkill
									image="https://img.icons8.com/color/2x/bootstrap.png"
									title="B"
								/>
							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col">
							<CardSkill
									image="https://img.icons8.com/color/512/python.png"
									title="PYTHON"
								/>
							</div>
							<div className="col">
								<CardSkill
										image="https://img.icons8.com/color/512/php.png"
										title="PHP"
									/>
							</div>
							<div className="col">
								<CardSkill
									image="https://img.icons8.com/color/512/mysql-logo.png"
									title="MySQL"
								/>
							</div>
							<div className="col">
								<CardSkill
									image="https://img.icons8.com/cute-clipart/512/flask.png"
									title="Flask"
								/>
							</div>
						</div>
					</div>
					<h1 className="">Skills</h1>
					<div className="border border-2 m-0">
						<img src="https://img.icons8.com/color/480/html-5--v1.png" style={{height:100}}/>
						<h6>HTML5</h6>
					</div>
					<div className="border border-2 m-0">
						<img src="https://img.icons8.com/color/512/php.png//https://img.icons8.com/color/512/flask.png" style={{height:100}}/>
						<h6>PHP</h6>
					</div>
				</div>
			</div>
		</>
	);
};