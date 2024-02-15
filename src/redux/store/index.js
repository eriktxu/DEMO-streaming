import { configureStore } from "@reduxjs/toolkit";
import seriesReducer from "../reducers/traerTitles";

export default configureStore({
    reducer:{
        series: seriesReducer
    }
})