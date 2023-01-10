import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import "../Pages.css";
import Form from "../../components/form/Form";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const { user, logIn } = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await logIn(email, password)
            navigate('/')
        } catch (error) {
            console.log(error);
            setError(error.message)
        }
    };

    return (
        <div className='w-full h-screen'>
            <img
                className='hidden sm:block absolute w-full h-full object-cover'
                src='https://www.zuerich.com/sites/default/files/image/2022/web_zuerich_kino_blue_cinema_1280x960_42809.jpg'
                alt='/'
            />
            <Form onSubmit={handleSubmit}
                  buttonName={"SIGN IN"}
                  linkTo={'/signup'}
                  onChangeMail={(e) => setEmail(e.target.value)}
                  onChangePassword={(e) => setPassword(e.target.value)}
                  titleName={'SIGN IN'}
                  error={error}
                  linkName={'Do you have account?'}
            />
        </div>
    );
};

export default Login;
