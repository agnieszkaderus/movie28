import React, {useEffect, useState} from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../../../pages/account/firebase/AuthContext';
import { db } from '../../../pages/account/firebase/firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import {Link} from "react-router-dom";
import 'tailwindcss/tailwind.css'
import './MovieToRow.css'
import '../movieCard/MovieCard.css'
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";


const MovieToRow = ({ item }) => {
    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false);
    const { user } = UserAuth();
    const [title, setTitle] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])


    const movieID = doc(db, 'users', `${user?.email}`);

    const saveShow = async () => {
        if (user?.email) {
            setLike(!like);
            setSaved(true);
            await updateDoc(movieID, {
                savedShows: arrayUnion({
                    id: item.id,
                    title: item.title,
                    img: item.image,
                }),
            });
        } else {
            alert('You must be logged in to do this');
        }
    };

    return ( <>
        {
            isLoading
            ?
            <div>
                <SkeletonTheme color="#202020" highlightColor="#444">
                    <Skeleton height={300} duration={2} />
                </SkeletonTheme>
            </div>
            :
        <div className='cardsToRow'>
            <Link to={`/details/${item.id}`} style={{textDecoration:"none", color:"white"}}>

            <img
                className='w-full h-auto block'
                 src={item?.image}
                 alt={item?.title} />


            <div
                className='backgroundImg'>
                    <p className='textTitle'>
                        {item?.title}
                    </p>
            </div>
            </Link>

            <p onClick={saveShow}>
                    {like ? (
                        <FaHeart className='absolute top-4 left-4  text-red-400'/>
                    ) : (
                        <FaRegHeart className='absolute top-4 left-4 text-red-300'/>
                    )}
                </p>

       </div>
        }
        </>
    );
};

export default MovieToRow;
