import React, { useState } from 'react'
import Navbar from './Navbar.jsx'
import TitleCards from './Titlecards.jsx'
import ContinueWatch from './ContinueWatch.jsx'
import './Home.css'
import infoIcon from '../pictures/info-logo.png'
import playIcon from '../pictures/play.png'
import coverImage from '../pictures/stranger.jpg'
import title from '../pictures/stranger title.webp'
import coverVideo from '../videos/stranger-things.mp4'
import Topten from './Topten.jsx'
import Footer from './Footer.jsx'
import {Link} from 'react-router-dom'

function Home() {
    const [name, setName] = useState('Daniel');
    return (
        <div className="home">
            <Navbar name={name}/>
            <div className="top-movie">
                    <div className="top-movie-img">
                        <img src={coverImage} width="100%" height="100%"/>
                    </div>
                    <div className="top-movie-info">
                        <img src={title} className="top-movie-title"/>
                        <p>When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.</p>
                        <div className='top-movie-btns'>
                            <Link to={`/player/Stranger Things`}>
                                <button className="play-btn">
                                    <div className='line-board'>
                                        <img src={playIcon} alt="Play" width="100%" height="100%"/>
                                    </div>
                                    <span>Play</span>
                                </button>
                            </Link>
                            <button className="info-btn">
                                <div>
                                    <img src={infoIcon} alt="Play" width="65%" height="100%"/>
                                </div>
                                <span>More Info</span>
                            </button>
                        </div>
                    </div>
                    <div className='body'>
                        <Topten/>
                        <TitleCards title={"Today's Top Picks"}/>
                        <ContinueWatch name={name}/>
                        <TitleCards title={"Popular on Netflix"}/>
                        <TitleCards title={"Action Movies"}/>
                        <TitleCards title={"Horror"}/>
                        <TitleCards title={"comedy"}/>
                        <Footer />
                    </div>
            </div>
        </div>
        )
}
export default Home