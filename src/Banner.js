import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import requests from './request';
import './banner.css';
// import {fethData} from './Row';

function Banner() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get("https://api.themoviedb.org/3/discover/tv?api_key=f3cf2f34fbdb546bdda2a99ed0ce78fc&with_networks=213")

            setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            // console.table(request.data.results)
            return request
        }
        fetchData();


    }, []);
    console.log(movies);
    function cutshot(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }



    return (
        <header className='banner' style={{ backgroundSize: "cover", backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`, backgroundPosition: "top center" }} >
            <div className="banner_contents">
                <h1 className='banner_tittle'>{movies?.title || movies?.name || movies?.original_name}</h1>
                <h4 className="banner_description">
                    {cutshot(movies?.overview, 150)}
                    {/* {movies?.overview} */}
                </h4>

                <div className="banner_buttons">
                    <button className="banner_button banner_button--play"><i className="banner__button--icon fas fa-play"></i><span>Play</span></button>
                    <button className="banner_button banner_button--more"><i className="banner__button--icon far fa-question-circle"></i><span>More Info</span></button>
                </div>



            </div>
            <div className="banner-fadebottom"></div>


        </header>
    )
}

export default Banner
