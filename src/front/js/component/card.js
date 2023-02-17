import propTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {

    return (
        <>
        <div className="boxesContainer">
            <div className="cardBox">
				<div className="cardFlip rounded">
					<div className="front">
						<h1>Helena</h1>
					</div>
					<div className="back">
						<h1>Gonzalez</h1>
					</div>
				</div>
			</div>
        </div>
    </>
    )
}