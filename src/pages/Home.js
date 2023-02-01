import React from 'react';
import MainMovie from "../components/movie/mainMovie/MainMovie";
import Row from "../components/movie/movieRow/Row";
import requests from "../Requests";
import CarouselMain from "../components/carousel/CarouselMain";
import CarouselMain2 from "../components/carousel/CarouselMain2";

const Home = () => {
    return(
        <div>
            <CarouselMain2 request={requests.requestPopular}/>
            <Row rowID='1' title='Movies' fetchURL={requests.requestMovies}/>
     </div>
    )

}


export default Home;
