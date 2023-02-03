import React, {useState} from 'react'
import MovieList from "../../components/movie/movieList/MovieList";


const DeleteMovie = () => {

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
