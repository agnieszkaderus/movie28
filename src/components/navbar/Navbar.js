import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../pages/account/firebase/AuthContext';
import './Navbar.css'
import Searchbar from "../searchbar/Searchbar";


const Navbar = () => {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();
    // console.log(user.email)

    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className=' flex items-center justify-between p-4 z-[100] w-full absolute'>
            <Link to='/'>
                <h1 className='text-effect' style={{textDecoration:"none"}}> MOVIES </h1>
            </Link>

            {user?.email ? (
                <div>
                    <Link to='/searchMovie'>
                        <img src={"https://cdn-icons-png.flaticon.com/512/8787/8787675.png"} className='searchImg'/>
                    </Link>
                    <Link to='/addMovie'>
                        <button className='buttonSignIn'>ADD MOVIE</button>
                    </Link>
                    <Link to='/delete'>
                        <button className='buttonSignIn'>MOVIE LIST</button>
                    </Link>
                    <Link to='/account'>
                        <button className='buttonSignIn'>ACCOUNT</button>
                    </Link>
                    <button
                        onClick={handleLogout}
                        className='buttonSignUp'
                    >
                        LOGOUT
                    </button>
                </div>
            ) : (
                <div className='flex'>
                    <div>
                    <Link to='/searchMovie'>
                        <img src={"https://cdn-icons-png.flaticon.com/512/8787/8787675.png"} className='searchImg'/>
                    </Link>
                     <Link to='/delete'>
                         <button className='buttonSignIn'>MOVIE LIST</button>
                     </Link>
                    <Link to='/login'>
                        <button className='buttonSignIn'>SIGN IN</button>
                    </Link>
                    <Link to='/signup'>
                        <button className='buttonSignUp'>
                            SIGN UP
                        </button>
                    </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
