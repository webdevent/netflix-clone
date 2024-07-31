import React, { useState, useEffect, useRef } from 'react'
import { Link, Outlet } from "react-router-dom";
import topTenList from './topten.js'
import './Topten.css'

function TopTen() {
    const topScrollRef = useRef()
    return (
        <div className="top-ten">
                <h3>Top 10 Movies in Jamaica Today</h3>
                <div className="top-ten-movies" ref={topScrollRef}>
                <button className="slidebtnleft" id="button" onClick={(event) =>{topScrollRef.current.scrollLeft -= 1000; event.preventDefault();}}>&#10229;</button> 
                    {topTenList.map((movie, index) => {
                        return (
                            <Link to={`/player/${movie.name}`} key={index}>
                                <div className="top-ten-movie" >
                                    <div className="card">
                                        <div className="badge">{movie.number}</div>
                                        <img src={movie.image} alt={movie.name} width="100%" height="100%"/>
                                    </div>
                                </div>
                            </Link>   
                        )
                    })}
                <button className="slidebtnright" id="button" onClick={(event) =>{topScrollRef.current.scrollLeft += 1000; event.preventDefault();}}>&#10230;</button> 
                </div>
        </div>
    )
}
export default TopTen;