import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	
	const login = () => {
		console.log(email, password)
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

		fetch("https://3001-4geeksacade-reactflaskh-ea2apv1hwm8.ws-eu77.gitpod.io/api/login", requestOptions)
		.then(response => response.json())
		.then(result => {
			if(result.token) {
				localStorage.setItem("token", result.token);
				navigate("/demo");
			}
			else{ 
				setError(result.msg)};
		})
		
		.catch(error => console.log('error', error));}

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				<label>Email:</label>
				<input onChange={(event)=> setEmail(event.target.value)}></input>
			</p>
			<p>
				<label>Password:</label>
				<input onChange={(event)=> setPassword(event.target.value)}></input>
			</p>
			<button onClick={login}>Login</button>
			{error && <div class="alert alert-danger" role="alert">
				{error}
				</div>}
		</div>
	);
};
