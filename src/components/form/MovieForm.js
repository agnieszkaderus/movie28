import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../pages/account/firebase/AuthContext';
import '../../pages/Pages.css'
const MovieForm = ({onSubmit, onChangeTitle,onChangeImage,onChangeContent, onClick }) => {


    return(
        <div>
            <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='textSignInUp'> ADD NEW MOVIE </h1>
                        <form onSubmit={onSubmit} className='w-full flex flex-col py-4'>

                                    <input
                                        onChange={onChangeTitle}
                                        className='p-3 my-2 bg-gray-700 rounded'
                                        type='text'
                                        placeholder='Title'
                                        autoComplete='Title'
                                    />

                                    <input
                                        onChange={onChangeImage}
                                        className='p-3 my-2 bg-gray-700 rounded'
                                        type='text'
                                        placeholder='Image'
                                        autoComplete='Image'
                                    />

                                    <input
                                        onChange={onChangeContent}
                                        className='p-3 my-2 bg-gray-700 rounded'
                                        type='text'
                                        placeholder='Content'
                                        autoComplete='Content'
                                    />



                            <button className='buttonSignUp'
                            onClick={onClick} >
                                Add movie
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieForm;
