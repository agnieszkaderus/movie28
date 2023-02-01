import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from "../../../Requests";
import "./MainMovie.css"
import {Link} from "react-router-dom";

const MainMovie = ({request}) => {
    const [movies, setMovies] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const movie = movies[Math.floor(Math.random() * movies.length)];

    const getAllData = () => {
        axios.get(
        "https://at.usermd.net/api/movies").then((response) => {console.log(response.data);
        setMovies(response.data);}).catch((error) => {
        console.log(error);
    });
    };

    useEffect(() => {
        getAllData();
    }, []);



    return (
        <div className='relative w-full h-[600px] text-white'>
            <div className='w-full h-full' style={{backgroundImage:`url(${movie?.image})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backdropFilter: 'blur(18px)' }}>
                <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
                <div className="grid grid-cols-2 ">
                    <div className="ml-10 col-span-1 ...  mt-5">
                        <div className='ml-10 my-4 absolute mt-5 '>
                            <h1 className='text-white  mt-20 mb-4'> {movie?.title}</h1>
                            <Link to={`/details/${movie?.id}`}>
                                <button className='buttonSeePoster'>
                                    Details
                                </button>
                            </Link>
                            <p className='mt-4  w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-white'>
                                {movie?.content}
                            </p>
                        </div>
                    </div>
                    <div className="...">
                        <img
                            className='poster'
                            src={movie?.image} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainMovie;
