import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    series: [],
    movies: []
}

const traerTitles = createSlice({
    name:"series",
    initialState,
    reducers: {
        traerSeries: (state, action) => {
            const { entries } = action.payload;
            const titleSeries = entries.filter(
                (entry) => entry.programType === 'series' && entry.releaseYear >= 2010
            ).slice(0,20);
            state.series = titleSeries;
        },
        traerMovies: (state, action) => {
            const { entries } = action.payload;
            const titleMovies = entries.filter(
                (entry) => entry.programType === 'movie' && entry.releaseYear >= 2010
            ).slice(0,20);
            state.movies = titleMovies;
        },
    },
})

export const { traerSeries } = traerTitles.actions;
export const { traerMovies } = traerTitles.actions;
export default traerTitles.reducer;