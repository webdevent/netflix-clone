import {useEffect, useRef} from "react";
import movies from "../Home/movies.js"
import video from "../videos/stranger-things.mp4"
import './Titlecards.css'
import { Link, Outlet } from "react-router-dom";

function TitleCards(title){
    const picksScrollerRef = useRef(null)
    const btn = document.getElementById('button');
    
    return(
        <div>
            <div className="today-top-picks">
                <h3>{title.title}</h3>
                <div className="picks-for-you" id="picksForYou" ref={picksScrollerRef}>
                    <button className="slidebtnleft" id="button" onClick={(event) =>{picksScrollerRef.current.scrollLeft -= 1000; event.preventDefault();}}>&#10229;</button> 
                    {movies.map((movie, index) => {
                        return(
                                <div className="picks-for-you-img" key={index} >
                                   <Link to={`/player/${movie.title}`}>
                                    <img 
                                        src={movie.image} 
                                        alt={movie.title} 
                                        width="100%" id="img" 
                                        
                                    />
                                    </Link>
                                    <Outlet context={{info: movie}}/>
                                </div>
                        )})}
                    <button className="slidebtnright" id="button" onClick={(event) =>{picksScrollerRef.current.scrollLeft += 1000; event.preventDefault();}}>&#10230;</button>
                </div>
            </div>
        </div>
    );
}
export default TitleCards;