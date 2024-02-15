import React from "react";
import './home.css'

const home = ({handleSeriesClick, handleMoviesClick}) => {
    return (
        <div className="container">
            <div className="home-container, image-background-series" onClick={handleSeriesClick}>
                <div className="section">
                    <h1>Series</h1>
                </div>
            </div>
            
            <div className="home-container, image-background-movies" onClick={handleMoviesClick}>
                <div className="section">
                    <h1>Movies</h1>
                </div>
            </div>
        </div>
    );
};

export default home;