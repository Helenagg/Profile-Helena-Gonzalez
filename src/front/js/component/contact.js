import React, { useEffect, useState } from "react";
import propTypes from "prop-types";

export const Contact = (props) => {
    return (
    //    <div className="row">
	// 		<div className="d-flex flex-column">
				<div className={props.column}>
					<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className={props.name} viewBox="0 0 16 16">
						<path d={props.dsvg}/>
					</svg>
					<a className="mx-4 text-reset text-decoration-none" href={props.href} target="_blank">{props.detail}</a>
				</div>
		// 	</div>
		// </div>
    )
}