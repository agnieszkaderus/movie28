import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from "../Requests";
import "./Main.css"
const Main = ({request}) => {
    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        axios.get(request).then((response) => {
            setMovies(response.data.results);
        });
    }, []);
      // console.log(movie);

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    };

    return (
        <div className=' relative w-full h-[600px] text-white'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
                <img
                    className='w-full h-full object-cover'
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title}
                />

                <div className='absolute w-full top-[45%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                    <div className='my-4'>
                        <button className='buttonPlay'>
                            Play
                        </button>
                        {/*<button className='button'>*/}
                        {/*    Watch Later*/}
                        {/*</button>*/}
                    </div>
                    <p className='text-black-400  text-m'>
                        Released: {movie?.release_date}
                    </p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
                        {truncateString(movie?.overview, 150)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
