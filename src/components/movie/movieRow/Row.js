import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieToRow from '../movieToRow/MovieToRow';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Row = ({ title, fetchURL, rowID }) => {
    const [movies, setMovies] = useState([]);

    const getAllData = () => {axios.get(
        "https://at.usermd.net/api/movies").then((response) => {console.log(response.data);
        setMovies(response.data);}).catch((error) => {
        console.log(error);
    });
    };

    useEffect(() => {
        getAllData();
    }, []);

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <div className={'bg-black'}>
            <div className='flex content-center'>
                <img src="https://cdn-icons-png.flaticon.com/512/5690/5690573.png"
                     className='w-8 h-8 mt-3 ml-4'/>
                <h2 className='text-white self font-bold md:text-xl p-3'>{title}</h2>
            </div>

            <div className='relative flex items-center group'>
                <MdChevronLeft
                    onClick={slideLeft}
                    className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40} />

                <div
                    id={'slider' + rowID}
                    className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'                >
                    {movies.map((item, id) => (
                        <MovieToRow key={id} item={item}/>
                    ))}
                </div>

                <MdChevronRight
                    onClick={slideRight}
                    className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40} />
            </div>
        </div>
    );
};

export default Row;
