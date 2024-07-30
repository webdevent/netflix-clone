import React, { useEffect, useRef } from "react";
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
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                headerRef.current.classList.remove('header');
                headerRef.current.classList.add('scrolled');
                } else {
                    headerRef.current.classList.add('header');
                    headerRef.current.classList.remove('scrolled');
                }
                });
    });

    function displaySearchBar() {
        const searchBar = document.getElementById('searchBar');
        searchBar.style.display = 'block';
        exit.style.display = 'inline-block';
    }
    function hideSearchBar() {
        const searchBar = document.getElementById('searchBar');
        searchBar.style.display = 'none';
        exit.style.display = 'none';
        }
        

    return(
        <div className="header" ref={headerRef}>
            <h1>NETCLONE</h1>
            <nav className="nav">
                <ul className="nav-list">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="movies.html">Movies</a></li>
                    <li><a href="tvshows.html">TV Shows</a></li>
                    <li><a href="contact.html">New & Popular</a></li>
                    <li><a href="contact.html">My List</a></li>
                    <li><a href="contact.html">Browse By Language</a></li>
                </ul>
            </nav>
            <nav className="nav">
                <ul className="nav-list">
                    <li className='li1'>
                        <button className='search' onClick={displaySearchBar}>
                            <div className="searchTab" id="searchTab">
                                <input type="text" className="searchbar" id="searchBar"/>
                                <p id="exit">X</p>
                            </div>
                            <div className="mag-cover">
                            <img src={magGlass} alt="search" className='mag'/>
                            </div>
                        </button>
                    </li>
                    <li>
                        <span>Kids</span>
                    </li>
                    <li>
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
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Navbar;