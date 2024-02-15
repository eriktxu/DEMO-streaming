import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { traerMovies } from "../../redux/reducers/traerTitles";
import './movies.css';

const Movies = () => {

    const dispatch = useDispatch();
    const movies = useSelector((state) => state.series.movies);

    const sample = require('../../data/sample.json');

    React.useEffect(() => {
        dispatch(traerMovies({ entries: sample.entries}));
    }, [dispatch, sample]);

    const sortedMovies = movies.slice().sort((a, b) => a.title.localeCompare(b.title));

    return(
        <div className="movies-container">
            {sortedMovies.map((movie) => (
                <div key={movie.id} className="movie-card">
                    <img 
                        src={movie.images["Poster Art"].url} alt= {movie.title}
                        width={movie.images["Poster Art"].width} 
                        height={movie.images["Poster Art"].height}
                    ></img>
                    <h3>{movie.title}</h3>
                    
                </div>
            ))}
        </div>
    );
}

export default Movies;