import React from "react";
import "./Player.css"
import movie from "../videos/stranger-things.mp4"
import backBtnImage from "../pictures/bkimages.png"
import playBtnImage from "../pictures/playbtn.png"
import pauseBtnTmage from "../pictures/pausebtn.png"
import forwardBtnImage from "../pictures/fastforward.png"
import prevBtnImage from "../pictures/rewindbtn.png"

function Player(){
    const playBtn = document.querySelector('.playBtn');
    const pauseBtn = document.querySelector('.pauseBtn');
    const forwardBtn = document.querySelector('.forwardBtn');
    const prevBtn = document.querySelector('.prevBtn');
    let vid = document.getElementById("movieDisplay");
    
    function PlayMovie() {
        vid.play()
        playBtn.style.display = "none";
        pauseBtn.style.display = "block";
    }

    function PauseMovie() {
        vid.pause();
        playBtn.style.display = "block";
        pauseBtn.style.display = "none";
    }
    
    
    return(
        <div className="player">
                    <video id="movieDisplay" className="video">
                        <source src={movie} type="video/mp4"></source>
                    </video>
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
                    <button className="backBtn">
                        <img src={backBtnImage} width="100%" height="100%"/>
                    </button>
                    <p className="player_name">Movie Name</p>
                    <p className="Epsidoes">Epsidoes</p>
                </div>
        </div>
        );
}
export default Player;