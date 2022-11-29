import React, { useState } from "react";
import { Context } from "../store/appContext";

export const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signup = () => {

        // El usuario debe volver a login para loguearse y obtener el token
        // if email and password is Ok la pagina slatara un alert y redirigirá a login, si el usuario ya
        // existe, lo indicará
    }
    console.log(email, password)

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
            <button onSubmit={signup}>Signup</button>
        </div>
    )
}