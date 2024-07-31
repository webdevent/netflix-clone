import React, { useRef } from "react";
import contWatch from "./contwatch.js";
import './ContinueWatch.css'

function ContinueWatch(props) {
    const picksScrollerRef2 = useRef(null)
    
    return (
        <div className="ContinueWatch">
             <h3>Continue Watching for {props.name}</h3>
                <div className="watching-title" ref={picksScrollerRef2}>
                <button className="slidebtnleft" id="button" onClick={(event) =>{picksScrollerRef2.current.scrollLeft -= 1000; event.preventDefault();}}>&#10229;</button> 
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
                        })}
                <button className="slidebtnright" id="button" onClick={(event) =>{picksScrollerRef2.current.scrollLeft += 1000; event.preventDefault();}}>&#10230;</button> 
                </div>
        </div>
    )
}
export default ContinueWatch;