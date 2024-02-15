import React, { useState } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from "./redux/store";
import Header from './screens/header/header';
import Footer from './screens/footer/footer';
import Home from './screens/home/home';
import PopularSeries from './screens/popularSeries/series';
import PopularMovies from './screens/popularMovies/movies';

function App() {

  const [currentScreen, setCurrentScreen] = useState('home');

  const handleHomeClick = () => {
    setCurrentScreen('home');
  }

  const handleSeriesClick = () => {
    setCurrentScreen('series');
  };

  const handleMoviesClick = () => {
    setCurrentScreen('movies');
  }


  return (
    <Provider store={store}>
    <div className="App">
      <Header handleHomeClick={handleHomeClick}/>
      
      {currentScreen === 'home' && <Home handleSeriesClick={handleSeriesClick} handleMoviesClick={handleMoviesClick}/>}
      {currentScreen === 'series' && <PopularSeries/>}
      {currentScreen === 'movies' && <PopularMovies/>} 
      

      <Footer/>
    </div>
    </Provider>
  );
}

export default App;
