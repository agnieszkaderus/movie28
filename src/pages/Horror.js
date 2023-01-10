import React from 'react'
import LinkPage from "./LinkPage";
import requests from "../Requests";

const Horror = () => {

    return(
        <LinkPage
            title={"Horror Movies"}
            request={requests.requestHorror}
            rowID={1}/>
    )
}

export default Horror;
