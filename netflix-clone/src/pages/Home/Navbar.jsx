import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import magGlass from '../pictures/mag.png';
import bell from '../pictures/bellicon.png';
import menuAro from '../pictures/triangle.png'
import profilePh from '../pictures/profileimage.png'
import profileTwoPh  from "../pictures/profiletwo.png";
import accountPh from '../pictures/account_icon.png'
import questionPh from "../pictures/question_mark.png";
import manageIcon from "../pictures/manage_icon.png";
import transferIcon from "../pictures/transfer_profile.png";
import notfiPh from "../pictures/the-equalizer.webp"
import '../Home/Navbar.css'


function Navbar(props){
    const headerRef = useRef(null);
    const exit = document.getElementById('exit')
    const history = useNavigate()
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                headerRef.current.style.background = "linear-gradient(rgb(14, 14, 14), rgb(14, 14, 14))";
                } else {
                headerRef.current.style.background = "linear-gradient(rgb(14, 14, 14), transparent)";
                }
                });
    });

    
    function displaySearchBar() {
        const searchBar = document.getElementById('searchTab');
        const mag = document.getElementById('mag');
        mag.style.display = "none";
        searchBar.classList.toggle("showtab")
    }

    function hideSearchBar() {
        const searchBar = document.getElementById('searchTab');
        const mag = document.getElementById('mag');
        mag.style.display = "block";
        searchBar.classList.toggle("showtab")
    }

    
    return(
        <div className="header" ref={headerRef}>
            <button id="dropmainmenu" className="mainDropMenu" onClick={() => {document.getElementById('nav').classList.toggle("actived")}}>
                <div></div>
                <div></div>
                <div></div>
            </button>
            <h3 className="netclonelg">NETCLONE</h3>
            <nav className="nav" id="nav">
                <ul className="nav-list">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/search"}>Movies</Link></li>
                    <li><a>TV Shows</a></li>
                    <li><a>New & Popular</a></li>
                    <li><a>My List</a></li>
                    <li><a>Browse By Language</a></li>
                </ul>
                <ul className="nav-list">
                    <li className='li1'>
                        <button className='search'>
                            <div className="searchTab" id="searchTab">
                                <img src={magGlass} className="inMag" onClick={hideSearchBar}/>
                                <input type="text" className="searchbar" id="searchBar" placeholder="title,people,genres" />
                            </div>
                            <div className="mag-cover"  onClick={displaySearchBar}>
                                <img src={magGlass} alt="search" className='mag' id="mag"/>
                            </div>
                        </button>
                    </li>
                    <li className="kidsSpan">
                        <span>Kids</span>
                    </li>
                    <li className="bell-btn-cover">
                        <button className="bell-btn" onMouseOver={() => {document.getElementById("dropNotif").classList.add("show")}}>
                                <img src={bell} alt="bell" width="100%" height="100%"/>
                        </button>
                        <div className="dropNotif" id="dropNotif" onMouseLeave={() => {document.getElementById("dropNotif").classList.remove("show")}}>
                            <ul>
                                <li>
                                    <img src={notfiPh}/>
                                    <a href="contact.html">New Releases</a>
                                </li>
                                <li>
                                    <img src={notfiPh}/>
                                    <a href="contact.html">New Releases</a>
                                </li>
                                <li>
                                    <img src={notfiPh}/>
                                    <a href="contact.html">New Releases</a>
                                </li>
                                <li>
                                    <img src={notfiPh}/>
                                    <a href="contact.html">New Releases</a>
                                </li>
                                <li>
                                    <img src={notfiPh}/>
                                    <a href="contact.html">New Releases</a>
                                </li>
                                <li><a href="contact.html">New Releases</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="li2">
                        <button className="account-btn" onMouseEnter={() => {document.getElementById("dropMenu").classList.add("show")}} >
                            <div className="profileTab" id="profileTab"></div>
                            <div className="menoAro">
                                <img src={menuAro} alt="menu" className='menuAro' width="100%" height="100%"/>
                            </div>   
                        </button>
                        <div className="dropMenu" id="dropMenu" onMouseLeave={() => {document.getElementById("dropMenu").classList.remove("show")}}>
                            <ul>
                                <li>
                                    <img src={profilePh} width="100%" height="100%"/>
                                    <p>{props.name}</p>
                                </li>
                                <li>
                                    <img src={profileTwoPh} width="100%" height="100%"/>
                                    <p>James</p>
                                </li>
                                <li>
                                    <img src={manageIcon} width="100%" height="100%"/>
                                    <p>Manage Proflies</p>
                                </li>
                                <li>
                                    <img src={transferIcon} width="100%" height="100%"/>
                                    <p>Transfer Profile</p>
                                </li>
                                <li>
                                    <img src={accountPh} width="100%" height="100%"/>
                                    <p>Account</p>
                                </li>
                                <li>
                                    <img src={questionPh} width="100%" height="100%"/>
                                    <p>Help Center</p>
                                </li>
                                <li>
                                    <Link to="/login">
                                        <p>Sign Out of Netflix</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Navbar;