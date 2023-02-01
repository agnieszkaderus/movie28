import React, {useEffect, useState} from 'react';
import MainMovie from "../../components/movie/mainMovie/MainMovie";
import Row from "../../components/movie/movieRow/Row";
import requests from "../../Requests";
import axios from "axios";
import {Button, Modal, ModalHeader} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import "../Pages.css"

const Details = () => {

    const [movie, setMovie] = useState([]);
    const [show, setShow] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const { id } = useParams()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    const getAllData = () => {
        axios.get(
        `https://at.usermd.net/api/movies/${id}`)
            .then((response) => {
        setMovie(response.data);
        }).catch((error) => {
        console.log(error);
    });
    };

    useEffect(() => {
        getAllData();
        window.scrollTo(0,0)
    }, []);

    const deleteMovie = () => {
        axios.delete(`https://at.usermd.net/api/movies/${id}`)
            .then(() => alert('Delete successful'));
        handleCloseDelete();
    }

    return (
        <div className='w-full h-[800px] text-white'>
            <div className='w-full h-full' style={{backgroundImage:`url(${movie?.image})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backdropFilter: 'blur(8px' }}>
                <div className='absolute w-full h-[800px] bg-gradient-to-r from-black'></div>
                <div className="grid grid-cols-2 ">
                    <div className="ml-10 col-span-1 ...  mt-5">
                        <div className='my-4 absolute mt-5 '>
                            <h1 className='text-white  mt-20 mb-4'> {movie?.title}</h1>
                             <button className='buttonSeePoster' onClick={handleShow}>
                                 POSTER
                             </button>

                            <div>
                                <button className='buttonSeePoster' onClick={handleShowDelete}>
                                    DELETE
                                </button>
                            </div>


                            <Modal show={show} onHide={handleClose} animation={true}>
                                <Modal.Body>
                                    <div>
                                        <img
                                            className='w-full h-full '
                                            src={movie?.image}/>
                                        <button className='buttonClosePoster top-[95%] left-[40%]' onClick={handleClose}>
                                            CLOSE
                                        </button>
                                    </div>
                                </Modal.Body>
                            </Modal>

                            <Modal show={showDelete} onHide={handleCloseDelete} animation={true}>
                                <Modal.Body>
                                    <div>
                                        <h1> Do you want to delete this movie?</h1>

                                        <img
                                            className='w-full h-[80%] '
                                            src={movie?.image} />
                                        <button className='buttonClosePoster top-[95%] left-[40%]' onClick={deleteMovie}>
                                            DELETE
                                        </button>
                                    </div>
                                </Modal.Body>
                            </Modal>

                            <p className='mt-4  w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-white'>
                                {movie?.content}
                            </p>
                        </div>
                    </div>
                    <div className="...">
                        <img
                            className='posterDetails'
                            src={movie?.image} />
                    </div>
                </div>
            </div>
        </div>




    );
};

export default Details;
