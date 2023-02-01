import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./MovieCard.css"
import { Link } from "react-router-dom"

const Cards = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    return <>
        {
            isLoading
                ?
                <div className="cards">
                    <SkeletonTheme color="#202020" highlightColor="#444">
                        <Skeleton height={300} duration={2} />
                    </SkeletonTheme>
                </div>
                :
                <Link to={`/details/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
                    <div className="cards">
                        <img className="cardsImg" src={movie?.image} />
                        <div className="cardsOverlay">
                            <div className="cardTitle">{movie?.title}</div>
                            <div className="cardDescription">{movie?.content}</div>
                        </div>
                    </div>
                </Link>
        }
    </>
}

export default Cards
