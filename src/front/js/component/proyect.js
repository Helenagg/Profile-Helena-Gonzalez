import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import ReactPlayer from "react-player";

export const Proyect = (props) => {
    return (
        <div className="boxesContainer">
        <div className="cardBox">
            <div className="cardFlip mb-4" style={{borderRadius: "15px"}}>
                <div className="front text-center">
                    <div className="justify-content-center align-items-center mt-2 border color-border-second rounded p-4">
                    <h2 className="">{props.name}</h2>
                    <p className="mt-3">{props.description}</p>
                    <p className="mt-3">{props.methods}</p>
                    </div>
                </div>
                <div className="back border color-border-second rounded">
                <ReactPlayer
                    url={props.url}
                    className='react-player'
                    playing={false}
                    width='100%'
                    height='100%'
                    controls={true}
                />
                </div>
            </div>
        </div>
    </div>
    )
}