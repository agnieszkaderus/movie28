import React from 'react';
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";
import {Carousel} from "react-responsive-carousel";

const Home = () => {
    return(
        <div>
            {/*<Carousel/>*/}
            <Main request={requests.requestPopular}/>
            <Row rowID='1' title='Popular Movies' fetchURL={requests.requestPopular}/>
            <Main request={requests.requestUpcoming}/>
            <Row rowID='2' title='Upcoming Movies' fetchURL={requests.requestUpcoming}/>
            <Main request={requests.requestTopRated}/>
            <Row rowID='4' title='Top Rated Movies' fetchURL={requests.requestTopRated}/>
            <Main request={requests.requestHorror}/>
            <Row rowID='5' title='Horror Movies' fetchURL={requests.requestHorror}/>
        </div>
    )

}


export default Home;
