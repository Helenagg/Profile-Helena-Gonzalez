import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signup = () => {
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

        fetch("https://3001-4geeksacade-reactflaskh-ea2apv1hwm8.ws-eu79.gitpod.io/api/signup", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        //POST de email y password
        // El usuario debe volver a login para loguearse y obtener el token
        // if email and password is Ok la pagina slatara un alert y redirigirá a login, si el usuario ya
        // existe, lo indicará
    }
    

    return (
        <div className="container text-center">
            <h1>Signup</h1>
            <p>
                <label>Email: </label>
                <input onChange={(event) => setEmail(event.target.value)}></input>
            </p>
            <p>
                <label>Password: </label>
                <input onChange={(event) => setPassword(event.target.value)}></input>
            </p>
            <button onClick={signup}>Signup</button>
        </div>
    )
}