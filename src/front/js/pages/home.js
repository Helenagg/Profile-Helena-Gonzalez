import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { element } from "prop-types";
import { Card } from "../component/card";
import { CardSkill } from "../component/cardSkill";
import { Contact } from "../component/contact";
import { Proyect } from "../component/proyect";
import { CardProyect } from "../component/cardProyect";
import { Link, useNavigate } from "react-router-dom";

export const Home = (props) => {
	const { store, actions } = useContext(Context);
	
	return (
		<>
			<div className="container-fluid text-center mt-5">
				<div className="container-fluid">
					<h1 className="color-title-first" id="profile">-<b> MY PROFILE </b>-</h1>
					<div className="container border border-2 color-border-first rounded p-4">
						<h1>Hello World!!</h1>
						<p>Hace ya unos años quedé sorprendida ante el encanto de la programación. Desde ese día decidí cual sería mi futuro laboral.</p>
						<p>Y hoy, aquí estoy, no sin esfuerzo, desarrollando mi primer porfolio para poder mostrar al mundo mi trabajo. Espero que os guste.</p>
						<p>Empezaré por dejar por aquí a la vista mi Curriculum:</p>
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-md-3 col-12">
									<Card 
									frontColor={{backgroundColor:"#553583", color:"#FDB927", borderRadius: "15px"}}
									backColor={{backgroundColor:"#FDB927", color:"#552583", borderRadius: "15px"}}
									title="Estudios"
									body={
										<>
											<h3>4Geeks Academy</h3>
											<p>Full-Stack Software Developer</p><br/>
											<h3>Desarrollador Aplicaciones Web</h3>
										</>
									}
									/>
								</div>
								<div className="col-md-3 col-12">
									<Card
									frontColor={{backgroundColor:"#FDB927", color:"#552583", borderRadius: "15px"}}
									backColor={{backgroundColor:"#552583", color:"#FDB927", borderRadius: "15px"}}
									title="Experiencia Laboral"
									body={
										<>
											<h5>Desarrollo Web, SIB</h5>
											<p>Creación de landing. Actualización de webs.</p>
											<h5>Responsable BO, Vodafone</h5>
											<p>Intermediario entre Vodafone y comerciales. Gestión de clientes.</p>
										</>}
									/>
								</div>
							</div>
						</div>
					</div>
					<h1 className="color-title-second mt-5" id="skills">-<b> SKILLS </b>-</h1>
					<div className="container border border-2 color-border-second rounded">
						<div className="row justify-content-center p-3">
							<div className="col-md-2 col-7" style={{height: 150}}>
								<CardSkill
									image="https://img.icons8.com/color/480/html-5--v1.png"
									title="HTML5"
								/>
							</div>
							<div className="col-md-2 col-7" style={{height: 150}}>
								<CardSkill
									image="https://img.icons8.com/color/512/css3.png"
									title="CSS"
								/>
							</div>
							<div className="col-md-2 col-7" style={{height: 150}}>
								<CardSkill
									image="https://img.icons8.com/color/512/javascript--v1.png"
									title="JavaScript"
								/>
							</div>
							<div className="col-md-2 col-7" style={{height: 150}}>
								<CardSkill
									image="https://img.icons8.com/color/512/react-native.png"
									title="React"
								/>
							</div>
							<div className="col-md-2 col-7" style={{height: 150}}>
								<CardSkill
									image="https://img.icons8.com/color/2x/bootstrap.png"
									title="Bootstrap"
								/>
							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-md-2 col-7" style={{height: 150}}>
							<CardSkill
									image="https://img.icons8.com/color/512/python.png"
									title="Python"
								/>
							</div>
							<div className="col-md-2 col-7" style={{height: 150}}>
								<CardSkill
										image="https://img.icons8.com/color/512/php.png"
										title="PHP"
									/>
							</div>
							<div className="col-md-2 col-7" style={{height: 150}}>
								<CardSkill
									image="https://img.icons8.com/color/512/mysql-logo.png"
									title="MySQL"
								/>
							</div>
							<div className="col-md-2 col-7" style={{height: 150}}>
								<CardSkill
									image="https://img.icons8.com/cute-clipart/512/flask.png"
									title="Flask"
								/>
							</div>
							<div className="col-md-2 col-7" style={{height: 150}}>
								<CardSkill
									image="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
									title="GitHub"
								/>
							</div>
						</div>
					</div>
					<h1 className="color-title-first mt-5" id="proyect">-<b> PROYECT </b>-</h1>
					<div className="container border border-2 color-border-first rounded">
						<div className="row justify-content-center mb-2">
							<div className="col-md-4 col-12">
								<Proyect
									name="TEAyudo App"
									description="Configuración de agenda diaria para niños con TEA"
									methods="React, HTML, CSS, Bootstrap, Phyton, JavaScript, Flask-Alchemy, Fetch API, JWT Extended."
									url="https://res.cloudinary.com/dmo7sg1on/video/upload/v1675786429/TEAyudo_nwllgu.mp4"
									href="https://github.com/Helenagg/Los-Inclusives"
								/>
							</div>
							<div className="col-md-4 col-12">
								<Proyect
									name="StarWars Blog"
									description="Conexión con API: SWAPI para visualizar datos en un blog de StarWars"
									methods="React, HTML, CSS, Bootstrap, Phyton, JavaScript, Fetch API"
									url="https://res.cloudinary.com/dmo7sg1on/video/upload/v1678441055/Vi%CC%81deo_Star_Wars_Helena_jtdbpq.mp4"
									href="https://github.com/Helenagg/Starwars-blog-reading-list"
								/>
							</div>
							<div className="col-md-4 col-12">
								<CardProyect
									name="Family API"
									description="Creación de API sencilla para la visualización de miembros de una familia"
									methods="React, HTML, CSS, Bootstrap, Phyton, JavaScript, Fetch API"
									src="https://res.cloudinary.com/dmo7sg1on/image/upload/v1677262133/Collage_Family_fe8ruu.jpg"
									href="https://github.com/Helenagg/Family-Static-API-with-Flask-JWT"
								/>
							</div>
						</div>
					</div>
					<h1 className="color-title-second mt-5" id="contact">-<b> CONTACT </b>-</h1>
					<div className="container border border-2 color-border-second rounded p-3">
						<div className="row justify-content-center">
						<Contact
							column="col-md-3 col-12 mt-2 mx-1"
							name="bi bi-github"
							dsvg="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							href="https://github.com/Helenagg"
							detail="GitHub Helena González"
						/>
						<Contact
							column="col-md-3 col-12 mt-2 mx-1"
							name="bi bi-envelope"
							dsvg="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
							detail="hgonzalezg18@gmail.com"
						/>
						<Contact
							column="col-md-3 col-12 mt-2 mx-2"
							name="bi bi-linkedin"
							dsvg="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
							href="https://www.linkedin.com/in/helena-gonzalez-gonzalez/"
							detail="Linkedin Helena González"
						/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};