import React from 'react'
import { Link } from 'react-router-dom'
import movies from '../Home/movies.js'
import Navbar from '../Home/Navbar.jsx'
import './Search.css'

function Search () {
    return (
        <div className="searchQu">
            <Navbar />
            <div className='FilterListCover'>
                <p>More to Explore:</p>
                <ul className="FilterList">
                    <li>Romance</li>
                    <li>Horror</li>
                    <li>Comedy</li>
                    <li>Block Buster</li>
                    <li>The Horror Movie</li>
                    <li>House of Dragon</li>
                </ul>
                <div className="search-container">
                    {movies.map((movie, index) => {
                        return (
                            <div className="searchImageCover" key={index}>
                                <Link to={`/player/${movie.title}`}>
                                    <img src={movie.image} alt={movie.title} width="100%" height="100%"/>
                                    <h3>{movie.title}</h3>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Search