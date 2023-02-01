import React, {useState} from 'react'
import MainMovie from "../../components/movie/mainMovie/MainMovie";
import requests from "../../Requests";
import Row from "../../components/movie/movieRow/Row";
import row from "../../components/movie/movieRow/Row";
import CarouselMain from "../../components/carousel/CarouselMain";
import MovieForm from "../../components/form/MovieForm";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import MovieList from "../../components/movie/movieList/MovieList";


const DeleteMovie = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <div className='w-full h-full bg-black'>
                <div >
                    <MovieList/>
                </div>
            </div>
        </>
    );
}

export default DeleteMovie;
