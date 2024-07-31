import React, { useEffect, useState } from "react";
import "./Player.css"
//import movie from "../videos/stranger-things.mp4"
import backBtnImage from "../pictures/bkimages.png"
import playBtnImage from "../pictures/playbtn.png"
import pauseBtnTmage from "../pictures/pausebtn.png"
import forwardBtnImage from "../pictures/fastforward.png"
import prevBtnImage from "../pictures/rewindbtn.png"
import movies from '../Home/movies.js';
import { useOutletContext, useParams } from "react-router-dom";

 function Player(){
    const playBtn = document.querySelector('.playBtn');
    const pauseBtn = document.querySelector('.pauseBtn');
    const forwardBtn = document.querySelector('.forwardBtn');
    const prevBtn = document.querySelector('.prevBtn');
    
    const  { name1 }  = useParams();
    const name = useParams().title;

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        // Find the movie data that matches the URL parameter
        const matchedMovie = movies.find((movie) => movie.title === name);
        setMovie(matchedMovie);
      }, [name]); // Re-run the effect when the URL parameter changes
      
        console.log(name)

    function PlayMovie() {
        const vid = document.getElementById("movieDisplay");
        vid.play()
        playBtn.style.display = "none";
        pauseBtn.style.display = "block";
    }

    function PauseMovie() {
        const vid = document.getElementById("movieDisplay");
        vid.pause();
        playBtn.style.display = "block";
        pauseBtn.style.display = "none";
    }
    
    const handleBack = () => {
        // Go back to the previous page
        window.history.back();
      };
    
    return(
        <div className="player">
                {movie && movie.video? (
                    <video id="movieDisplay" className="video" autoPlay>
                    <source src={movie.video} type="video/mp4"></source>
                    </video>
                ) : (
                    <div>No video found</div>
                )}
                    <div className="buttons">
                        <button onClick={() => {document.getElementById("movieDisplay").currentTime -= 10}} className="prevBtn">
                            <img src={prevBtnImage} alt="back" width="100%" height="100%"/>
                        </button>
                        <button onClick={PauseMovie} className="pauseBtn">
                            <img src={pauseBtnTmage} width="100%" height="100%"/>
                        </button>
                        <button onClick={PlayMovie} className="playBtn">
                            <img src={playBtnImage} alt="play" width="100%" height="100%"/>
                        </button>
                        <button onClick={() => {document.getElementById("movieDisplay").currentTime += 10}} className="forwardBtn">
                            <img src={forwardBtnImage} alt="back" width="100%" height="100%" />
                        </button>
                    </div>
                <div className="player_info">
                    <button className="backBtn" onClick={handleBack}>
                        <img src={backBtnImage} width="100%" height="100%"/>
                    </button>
                    <p className="player_name">{name}</p>
                </div>
        </div>
        );
}
export default Player;