import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

	var raw = JSON.stringify({
		"email": "helena.gonza@hotmail.com",
		"password": "123456"
	});

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	fetch("https://3001-4geeksacade-reactflaskh-ea2apv1hwm8.ws-eu77.gitpod.io/api/login", requestOptions)
	.then(response => response.json())
	.then(result => console.log(result))
	.catch(error => console.log('error', error));

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				<label>Email:</label>
				<input></input>
			</p>
			<p>
				<label>Password:</label>
				<input></input>
			</p>
			<button onClick={"pdte"}>Login</button>
		</div>
	);
};
