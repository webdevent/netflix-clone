import {useRef} from "react";
import movies from "../Home/movies.js"
import video from "../videos/stranger-things.mp4"
import './Titlecards.css'

function TitleCards(title){
    const picksScrollerRef = useRef(null)
    
    
    function hoverVideo(){
        document.querySelector('.popup-video').style.display = 'block';
    }
    return(
        <div>
            <div className="today-top-picks">
                <h3>{title.title}</h3>
                <div className="picks-for-you" id="picksForYou" ref={picksScrollerRef}>
                    <button className="slidebtnleft">left</button> 
                    {movies.map((movie, index) => {
                        return(
                            <div className="picks-for-you-img" key={index} >
                                <img src={movie.image} alt="stranger things" width="100%" id="img" onMouseOver={hoverVideo}/>
                                <div className="popup-video" onMouseOut={() => {document.querySelector('.popup-video').style.display = 'none';}}>
                                    <video loop muted autoPlay>
                                        <source src={video} type="mp4/video"></source>
                                    </video>
                                </div>
                            </div>
                        )})}
                    <button className="slidebtnright" onClick={(event) =>{picksScrollerRef.current.scrollLeft += 100; event.preventDefault();}}>right</button>
                </div>
            </div>
        </div>
    );
}
export default TitleCards;