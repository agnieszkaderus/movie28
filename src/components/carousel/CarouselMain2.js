import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useEffect, useState} from "react";
import axios from "axios";
import requests from "../../Requests";
import MainMovie from "../movie/mainMovie/MainMovie";

const CarouselMain2 = ({request}) => {
    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)];
    const movie2 = movies[Math.floor(Math.random() * movies.length)];
    const movie3 = movies[Math.floor(Math.random() * movies.length)];
    const movie4 = movies[Math.floor(Math.random() * movies.length)];
    const movie5 = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        axios.get(request).then((response) => {
            setMovies(response.data.results);
        });
    }, []);
    // console.log(movie);

    return (
        // <div className=' relative w-full h-[600px] text-white'>
        //     <div className='w-full h-full'>
        //         <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>

        <Carousel className='relative w-full h-[600px] text-white'>
            <Carousel.Item className='relative w-full h-[600px] '> interval={2000}>
                <MainMovie request={requests.requestMovies}/>
            </Carousel.Item>
            <Carousel.Item className='relative w-full h-[600px] '> interval={2000}>
                <MainMovie request={requests.requestMovies}/>
            </Carousel.Item>
            <Carousel.Item className='relative w-full h-[600px] '> interval={2000}>
                <MainMovie request={requests.requestMovies}/>
            </Carousel.Item>
            <Carousel.Item className='relative w-full h-[600px] '> interval={2000}>
                <MainMovie request={requests.requestMovies}/>
            </Carousel.Item>
            <Carousel.Item className='relative w-full h-[600px] '> interval={2000}>
                <MainMovie request={requests.requestMovies}/>
            </Carousel.Item>

        </Carousel>
    );
}

export default CarouselMain2;
