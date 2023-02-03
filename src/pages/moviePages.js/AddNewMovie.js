import React, {useState} from 'react'
import MovieForm from "../../components/form/MovieForm";
import {useNavigate} from "react-router-dom";
import axios from "axios";


const AddNewMovie = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const [newID, setNewID] = useState('');
    const navigate = useNavigate();


    const addMovie = () => {
        axios.post("https://at.usermd.net/api/movies", {
                "title": title,
                "image": image,
                "content": content,
            })
            .then((response) => setNewID(response.data.id))
            .catch((err) => console.log(err));
    }

    return(
        <div className='w-full h-screen'>
            <img
                className='hidden sm:block absolute w-full h-full object-cover'
                src='https://media.gettyimages.com/id/1298645473/video/4k-spot-lights-background-black-and-yellow-stock-video.jpg?s=640x640&k=20&c=znU4Gx0-afDXkZLj17SjOFLLOlCsbIEja-wmNf6cyJs='
                alt='/'
            />
            <MovieForm
                onSubmit={addMovie}
                onChangeTitle={(e) => setTitle(e.target.value)}
                onChangeImage={(e) => setImage(e.target.value)}
                onChangeContent={(e) => setContent(e.target.value)}
            />
        </div>
    );
}

export default AddNewMovie;
