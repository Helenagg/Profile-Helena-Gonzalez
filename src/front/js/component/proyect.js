import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import ReactPlayer from "react-player";

export const Proyect = (props) => {
    return (
        <div className="boxesContainer">
        <div className="cardBox">
            <div className="cardFlip" style={{borderRadius: "15px"}}>
                <div className="front text-center">
                    <h2 className="">{props.name}</h2>
                    <p className="">{props.description}</p>
                </div>
                <div className="back">
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