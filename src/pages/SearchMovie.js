import SavedShows from "../components/SavedShows";
import React, {useEffect, useState} from "react";
import SearchBar from "../components/searchbar/Searchbar";
import Row from "../components/Row";
import requests from "../Requests";
import RowMax from "../components/RowMax";

const SearchMovie = () => {
    const [searchValue, setSearchValue] = useState('');
    const [movies, setMovies] = useState([]);

    const getMovieRequest = async (searchValue) => {
        const url =  `https://api.themoviedb.org/3/search/movie?api_key=f7f35b48a55325d20e34f834f8015e19&language=en-US&query=${searchValue}&page=1&include_adult=false`;
        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    };

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);


    return(
        <>
            <div className='w-full'>
                <img
                    className='w-full h-[400px] object-cover'
                    src='https://thumbs.dreamstime.com/b/blue-cinema-theater-format-d-illustration-empty-film-projector-ray-217267173.jpg'
                    alt='/'
                />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
                <div className='absolute top-[20%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold text-white'>SEARCH MOVIE</h1>
                    <SearchBar className='text-black' searchValue={searchValue} setSearchValue={setSearchValue}/>
                    <RowMax rowID='1' title='Movies' fetchURL={`https://api.themoviedb.org/3/search/movie?api_key=f7f35b48a55325d20e34f834f8015e19&language=en-US&query=${searchValue}&page=1&include_adult=false`}/>

                </div>
            </div>
        </>
    )
}

export default SearchMovie;
