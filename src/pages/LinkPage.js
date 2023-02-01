import React from 'react'
import MainMovie from "../components/movie/mainMovie/MainMovie";
import requests from "../Requests";
import Row from "../components/movie/movieRow/Row";
import row from "../components/movie/movieRow/Row";
import CarouselMain from "../components/carousel/CarouselMain";


const LinkPage = ({request, title, rowID,}) => {

    return(
        <div>
            <CarouselMain request={request}/>
            <Row title={title} rowID={rowID} fetchURL={request}/>
        </div>
    )
}

export default LinkPage;
