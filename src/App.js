import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner'
import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row tittle="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row tittle="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row tittle="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row tittle="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row tittle="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row tittle="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row tittle="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row tittle="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />


    </div>
  );
}

export default App;
