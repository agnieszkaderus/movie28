import React from 'react'
import LinkPage from "./LinkPage";
import requests from "../Requests";

const Upcoming = () => {
    return(
        <LinkPage
            title={"Upcoming Movies"}
            request={requests.requestUpcoming}
            rowID={1}/>
    )
}

export default Upcoming;
