import propTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export const CardProyect = (props) => {

    return (
        <>
           <div className="boxesContainer">
                <div className="cardBox">
                    <div className="cardFlip mb-4" style={{borderRadius: "15px"}}>
                        <div className="front text-center">
                            <div className="justify-content-center align-items-center mt-2 border color-border-second rounded p-4">
                                <h2 className="color-title-second">{props.name}</h2>
                                <p className="mt-3">{props.description}</p>
                                <p className="mt-3">{props.methods}</p>                            
                            </div>
                        </div>
                        <div className="back">
                            <div className="justify-content-center align-items-center border color-border-second rounded p-4">
                                <img className="img-fluid" src={props.src}/>
                                <a className="text-reset text-decoration-none" href={props.href} target="_blank">{props.name}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}