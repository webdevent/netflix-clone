import react from 'react'
import topTenList from './topten.js'
import './Topten.css'

function TopTen() {
    return (
        <div className="top-ten">
                <h3>Top 10 Movies in Jamaica Today</h3>
                <div className="top-ten-movies">
                    {topTenList.map((movie, index) => {
                        return (
                            <div className="top-ten-movie" key={index}>
                            <div className="card">
                                <div className="badge">{movie.number}</div>
                                <img src={movie.image} alt={movie.name} width="100%" height="100%"/>
                            </div>
                        </div>
                        )
                    })};
                </div>
        </div>
    )
}
export default TopTen;