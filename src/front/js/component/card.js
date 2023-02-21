import propTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {

    return (
        <>
        <div className="boxesContainer">
            <div className="cardBox">
				<div className="cardFlip" style={{borderRadius: "15px"}}>
					<div className="front text-center" style={props.frontColor}>
						<h1 className="position-absolute top-50 start-50 translate-middle">{props.title}</h1>
					</div>
					<div className="back" style={props.backColor}>
						<div className="">{props.body}</div>
					</div>
				</div>
			</div>
        </div>
    </>
    )
}