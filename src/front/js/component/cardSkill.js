import propTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export const CardSkill = (props) => {

    return (
        <>
        <div className="boxesContainer text-center">
            <div className="cardBox text-center">
				<div className="cardFlip text-center" style={{borderRadius: "15px", width: 130, height: 130}}>
					<div className="front align-items-center border border-2 color-border-first rounded">
						<img src={props.image} style={{height:100}}/>
					</div>
					<div className="back align-items-center border border-2 color-border-first rounded">
						<h2 className="font-card">{props.title}</h2>
					</div>
				</div>
			</div>
        </div>
    </>
    )
}