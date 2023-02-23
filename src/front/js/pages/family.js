import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { element } from "prop-types";
import { Card } from "../component/card";
import { Contact } from "../component/contact";
import { Link, useNavigate } from "react-router-dom";

export const Family = (props) => {
	const { store, actions } = useContext(Context);
	const [result, setResult] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		var myHeaders = new Headers();
		myHeaders.append("Authorization", "Bearer "+localStorage.getItem("token"));

		var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
		};

		fetch(`${process.env.BACKEND_URL}/api/private/`, requestOptions)
		.then(response => response.json())
		.then(result => {
			if(!result.ok) {
				navigate("/")
			}
		})
		.catch(error => console.log('error', error));
	}, [])

	const view = () => {
		var requestOptions = {
			method: 'GET',
			redirect: 'follow'
		  };
		  
		  fetch(`${process.env.BACKEND_URL}/api/family`, requestOptions)
			.then(response => response.json())
			.then(result =>setResult(result))
			.catch(error => console.log('error', error));
	}
	console.log(result)
	return (
		<>
			<div className="text-center mt-1">
				<h2>FAMILY JACKSON</h2>
				<CreatePerson/>
				<div className="container text-center mt-3 border border-1 border-primary p-3">
				<button className="btn btn-outline-primary mt-3" onClick={view}>View Family</button>
				<div className="container text-center d-flex mt-5">
				{result.Family?.map((element, index) => {
					return (
						<>
							<Card
								name={element.first_name+" "+element.last_name}
								age={"Age: "+element.age}
								lucky_numbers={"Lucky_numbers: "+element.lucky_numbers}
								first_name={"View "+element.first_name}
								btn=<Link to={"/person/"+(element.id)}>
					    			<button className="btn btn-outline-primary">{"View "+element.first_name}</button>
                    			</Link>
				
							/>
						</>
					)
				})}
				</div>
				</div>
			</div>
		</>
	);
};