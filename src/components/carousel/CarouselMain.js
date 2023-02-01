import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useEffect, useState} from "react";
import axios from "axios";
import requests from "../../Requests";

const CarouselMain = ({request}) => {
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

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    };

    return (
        // <div className=' relative w-full h-[600px] text-white'>
        //     <div className='w-full h-full'>
        //         <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>

        <Carousel className='relative w-full h-[600px] text-white'>
            <Carousel.Item className='relative w-full h-[600px] '> interval={2000}>
                <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>

                <img
                    className="d-block w-100"
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title}
                />
                <Carousel.Caption>
                    <h3>{movie?.title}</h3>
                    <p className='flex ml-[42%]'>
                        {/*<img className='  w-5 h-5 left-[40%] relative ' src={"https://cdn-icons-png.flaticon.com/512/1040/1040230.png"} />*/}
                        Vote average: {truncateString(movie?.vote_average)}
                        <img className='ml-2 relative w-5 h-5'
                             src={"https://cdn-icons-png.flaticon.com/512/1040/1040230.png"}/>
                    </p>
                    <p>{truncateString(movie?.overview, 250)}</p>
                </Carousel.Caption>

            </Carousel.Item>

            <Carousel.Item className='relative w-full h-[600px] '> interval={2000}>
                <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
                <img
                    className="d-block w-100"
                    src={`https://image.tmdb.org/t/p/original/${movie2?.backdrop_path}`}
                    alt={movie2?.title}
                />
                <Carousel.Caption>
                    <h3>{movie2?.title}</h3>
                    <p className='flex ml-[42%]'>
                        {/*<img className='  w-5 h-5 left-[40%] relative ' src={"https://cdn-icons-png.flaticon.com/512/1040/1040230.png"} />*/}
                        Vote average: {truncateString(movie2?.vote_average)}
                        <img className='ml-2 relative w-5 h-5'
                             src={"https://cdn-icons-png.flaticon.com/512/1040/1040230.png"}/>
                    </p>
                    <p>{truncateString(movie2?.overview, 250)}
                    </p>
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item className='relative w-full h-[600px] '> interval={2000}>
                <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>

                <img
                    className="d-block w-100 "
                    src={`https://image.tmdb.org/t/p/original/${movie3?.backdrop_path}`}
                    alt={movie3?.title}
                />

                <Carousel.Caption>

                    <h3>{movie3?.title}</h3>
                    <p className='flex ml-[42%] '>
                        {/*<img className='  w-5 h-5 left-[40%] relative ' src={"https://cdn-icons-png.flaticon.com/512/1040/1040230.png"} />*/}
                        Vote average: {truncateString(movie3?.vote_average)}
                        <img className='ml-2 relative w-5 h-5'
                             src={"https://cdn-icons-png.flaticon.com/512/1040/1040230.png"}/>
                    </p>
                    <p>{truncateString(movie3?.overview, 250)}</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='relative w-full h-[600px] '> interval={2000}>
                <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
                <img
                    className="d-block w-100"
                    src={`https://image.tmdb.org/t/p/original/${movie4?.backdrop_path}`}
                    alt={movie4?.title}
                />
                <Carousel.Caption>
                    <h3>{movie4?.title}</h3>
                    <p className='flex ml-[42%]'>
                        {/*<img className='  w-5 h-5 left-[40%] relative ' src={"https://cdn-icons-png.flaticon.com/512/1040/1040230.png"} />*/}
                        Vote average: {truncateString(movie4?.vote_average)}
                        <img className='ml-2 relative w-5 h-5'
                             src={"https://cdn-icons-png.flaticon.com/512/1040/1040230.png"}/>
                    </p>
                    <p>{truncateString(movie4?.overview, 250)}</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='relative w-full h-[600px] '> interval={2000}>
                <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
                <img
                    className="d-block w-100"
                    src={`https://image.tmdb.org/t/p/original/${movie5?.backdrop_path}`}
                    alt={movie5?.title}
                />
                <Carousel.Caption>
                    <h3>{movie5?.title}</h3>
                    <p className='flex ml-[42%]'>
                        {/*<img className='  w-5 h-5 left-[40%] relative ' src={"https://cdn-icons-png.flaticon.com/512/1040/1040230.png"} />*/}
                        Vote average: {truncateString(movie5?.vote_average)}
                        <img className='ml-2 relative w-5 h-5'
                             src={"https://cdn-icons-png.flaticon.com/512/1040/1040230.png"}/>
                    </p>
                    <p>{truncateString(movie5?.overview, 250)}</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}

export default CarouselMain;
