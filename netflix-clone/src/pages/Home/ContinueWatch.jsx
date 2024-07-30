import React from "react";
import contWatch from "./contwatch.js";
import './ContinueWatch.css'

function ContinueWatch(props) {
    
    return (
        <div className="ContinueWatch">
             <h3>Continue Watching for {props.name}</h3>
                <div className="watching-title"> 
                        {contWatch.map((movie, index) => {
                            return (
                                <div className="cont-watching-tv" key={index}>
                                    <img src={movie.image} alt={movie.title} width="100%"/>
                                    <div className="bar-cover">
                                        <div className="progress-bar">
                                            <div className="progress" style={{ width: `${movie.progress}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })};
                </div>
        </div>
    )
}
export default ContinueWatch;