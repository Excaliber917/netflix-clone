import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ tittle, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, settrailerUrl] = useState("")


    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl)

            setMovies(request.data.results);
            console.table(request.data.results)
            return request
        }
        fetchData();


    }, [fetchUrl]);
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleClick = (movies) => {
        if (trailerUrl) {
            settrailerUrl("")
        }
        else {
            movieTrailer(movies?.original_title || movies?.original_name || movies?.name || "")

                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    settrailerUrl(urlParams.get('v'))
                    console.log(urlParams);
                    console.log(urlParams.get('v'));
                    console.log(url);

                }).catch((error) => console.log(error))
            console.log(movies?.original_title);
            console.log(movies?.original_name);
            console.log(movies?.name);
        }

    }
    return (
        <div className='row__container'>
            <h2 className="row__title">{tittle}</h2>
            <div className="row">
                <div className="row__posters">
                    {movies.map(movie => (
                        <img key={movie.id}
                            onClick={() => handleClick(movie)}
                            className={`${isLargeRow ? "row_posterLarge" : "row__poster"}`}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name} />
                    ))}
                </div>
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}


        </div>
    )
}

export default Row
