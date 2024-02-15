import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { traerSeries } from "../../redux/reducers/traerTitles";
import './series.css'

const Series = () => {

    const dispatch = useDispatch();
    const series = useSelector((state) => state.series.series);

    const sample = require('../../data/sample.json');

    React.useEffect(() => {
        dispatch(traerSeries({ entries: sample.entries}));
    }, [dispatch, sample]);

    const sortedSeries = series.slice().sort((a, b) => a.title.localeCompare(b.title));


    return(
        <div className="series-container">
            {sortedSeries.map((serie) => (
                <div key={serie.id} className="serie-card">
                    <img 
                        src={serie.images["Poster Art"].url} alt= {serie.title}
                        width={serie.images["Poster Art"].width} 
                        height={serie.images["Poster Art"].height}
                    ></img>
                    <h3>{serie.title}</h3>
                    
                </div>
            ))}
        </div>
    );
}

export default Series;