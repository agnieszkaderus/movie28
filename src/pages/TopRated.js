import React from 'react'
import LinkPage from "./LinkPage";
import requests from "../Requests";

const TopRated = () => {

    return(
        <LinkPage
            title={"TopRated Movies"}
            request={requests.requestTopRated}
            rowID={1}/>
    )
}

export default TopRated;
