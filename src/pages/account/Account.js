import React from 'react';
import SavedShows from '../../components/SavedShows';

const Account = () => {
    return (
        <>
            <div className='w-full text-white'>
                <img
                    className='w-full h-[400px] object-cover'
                    src='https://static.zoonar.com/img/www_repository5/28/ce/88/10_7fb9ce17c949248e3509f3d8798807af.jpg'
                    alt='/'
                />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
                <div className='absolute top-[20%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold'>MY FAVOURITE MOVIES</h1>
                </div>
            </div>
            <SavedShows />
        </>
    );
};

export default Account;
