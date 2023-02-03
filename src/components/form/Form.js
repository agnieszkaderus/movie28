import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../pages/account/firebase/AuthContext';
import '../../pages/Pages.css'
const Form = ({newUser, onSubmit, onChangeMail, onChangeName, onChangeLogin, onChangePassword, buttonName, titleName, linkTo, error, linkName}) => {


    return (
        <div>
            <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='textSignInUp'>{titleName}</h1>
                        {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}
                        <form onSubmit={onSubmit} className='w-full flex flex-col py-4'>
                            {(newUser === true) ? (
                                <>
                                    <input
                                        onChange={onChangeName}
                                        className='p-3 my-2 bg-gray-700 rounded'
                                        type='text'
                                        placeholder='Name'
                                        autoComplete='name'
                                    />


                                    <input
                                        onChange={onChangeMail}
                                        className='p-3 my-2 bg-gray-700 rounded'
                                        type='email'
                                        placeholder='Email'
                                        autoComplete='email'
                                    />
                                    <input
                                        onChange={onChangePassword}
                                        className='p-3 my-2 bg-gray-700 rounded'
                                        type='password'
                                        placeholder='Password'
                                        autoComplete='current-password'
                                    />
                                </>
                            ) : (
                                <>
                                    <input
                                        onChange={onChangeMail}
                                        className='p-3 my-2 bg-gray-700 rounded'
                                        type='email'
                                        placeholder='Email'
                                        autoComplete='email'
                                    />
                                    <input
                                        onChange={onChangePassword}
                                        className='p-3 my-2 bg-gray-700 rounded'
                                        type='password'
                                        placeholder='Password'
                                        autoComplete='current-password'
                                    />
                                </>
                            )}
                            <button className='buttonSignUp'>
                                {buttonName}
                            </button>

                            <div className='divChange'>
                                <Link to={linkTo}>
                                    {linkName}
                                    <img className='w-12 h-12 ml-2 m-1'
                                         src={"https://cdn-icons-png.flaticon.com/512/7088/7088981.png"}/>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
