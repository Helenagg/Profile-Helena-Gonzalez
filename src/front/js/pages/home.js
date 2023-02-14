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
			<div className="container text-center">
				<div className="container-fluid">
					<img src="https://img.pikbest.com/backgrounds/20190730/technology-in-the-concept-of-digital-background-v_1517348jpg!bwr800" style={{height: 400, width:"80%" }}/>
					<h1 className="">My Profile</h1>
				</div>
			</div>
		</>
	);
};