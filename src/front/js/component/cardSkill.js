import propTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export const CardSkill = (props) => {

    return (
        <>
            <div className="cardSkill text-center">
				<div className="cardFlip text-center" style={{borderRadius: "15px", width: 130, height: 130}}>
					<div className="front text-center align-items-center border border-2 color-border-first rounded">
						<img className="position-absolute top-50 start-50 translate-middle" src={props.image} style={{height:100}}/>
					</div>
					<div className="back align-items-center border border-2 color-border-first rounded">
						<h2 className="mt-5 font-card">{props.title}</h2>
					</div>
				</div>
			</div>
    	</>
    )
}