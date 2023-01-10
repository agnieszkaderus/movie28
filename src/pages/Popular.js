import React from 'react'
import Main from "../components/Main";
import requests from "../Requests";
import Row from "../components/Row";
import LinkPage from "./LinkPage";


const Popular = () => {
    return(
        <LinkPage
            title={"Popular Movies"}
            request={requests.requestPopular}
            rowID={1}/>
     )
}

export default Popular;
