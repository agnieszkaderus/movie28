import React, {useEffect, useState} from "react"
import "./MovieList.css"
import Cards from "../movieCard/MovieCard"
import requests from "../../../Requests";

const MovieList = () => {

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        getData()
    }, [])



    const getData = () => {
        fetch(requests.requestMovies)
            .then(res => res.json())
            .then(data => setMovieList(data))
    }

    return (
        <div className="movieList">
            <h2 className="listTitle"> MOVIES </h2>
            <div className="listCards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList
