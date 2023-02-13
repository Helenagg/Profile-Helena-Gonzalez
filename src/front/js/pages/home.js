import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { element } from "prop-types";
import { Card } from "../component/card";
import { CreatePerson } from "../component/createPerson";
import { Link } from "react-router-dom";

export const Home = (props) => {
	const { store, actions } = useContext(Context);
	const [result, setResult] = useState([]);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = () => {

		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
		"email": email,
		"password": password
		});

		var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
		};

		fetch("https://3001-helenagg-familystaticap-bc1ms6wv7he.ws-eu86.gitpod.io/api/login", requestOptions)
		.then(response => response.json())
		.then(result => console.log(result))
		.catch(error => console.log('error', error));

	}

	return (
		<>
			<div className="container text-center mt-5 border border-1 border-primary p-3">
				<div className="container p-3">
					<h1 className="text-primary">LOGIN</h1>
					<div className="row justify-content-md-center border border-1 border-light p-5 m-5">
						<div className="col">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3CPFSTpcN-YwAU8Euffs0uXuywMvSYwVpJA&usqp=CAU" style={{height: 250}}/>
						</div>
						<div className="col">
							<input className="m-3" type="text" placeholder="Email" onChange={(event) => setEmail(event.target.value)}/><br/>
							<input className="m-3" type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/><br/>
							<button className="btn btn-primary m-2" onClick={login}>Login</button>
							<Link to="/signup" className="m-2">
								<button className="btn btn-outline-primary">Signup</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};