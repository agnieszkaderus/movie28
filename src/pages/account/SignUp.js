import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import "../Pages.css"
import Form from "../../components/form/Form";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, signUp } = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signUp(email, password);
            navigate('/account')
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className='w-full h-screen'>
                <img
                    className='hidden sm:block absolute w-full h-full object-cover'
                    src='https://www.zuerich.com/sites/default/files/image/2022/web_zuerich_kino_blue_cinema_1280x960_42809.jpg'
                    alt='/'
                />
                <Form
                    titleName={"CREATE NEW ACCOUNT"}
                    onSubmit={handleSubmit}
                    onChangeMail={(e) => setEmail(e.target.value)}
                    onChangePassword={(e) => setPassword(e.target.value)}
                    buttonName={"SIGN UP"}
                    linkTo={'/account'}
                    linkName={"Login "}/>

            </div>
        </>
    );
};

export default Signup;
