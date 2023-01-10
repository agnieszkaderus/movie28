import React from 'react'
import Main from "../components/Main";
import requests from "../Requests";
import Row from "../components/Row";
import row from "../components/Row";


const LinkPage = ({request, title, rowID,}) => {

    return(
        <div>
            <Main request={request}/>
            <Row title={title} rowID={rowID} fetchURL={request}/>
        </div>
    )
}

export default LinkPage;
