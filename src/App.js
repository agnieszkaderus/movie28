import React from "react";
import Navbar from "./components/navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import {AuthContextProvider} from "./context/AuthContext";
import Login from "./pages/account/Login";
import Account from "./pages/account/Account";
import Signup from "./pages/account/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import Details from "./pages/moviePages.js/Details";
import AddNewMovie from "./pages/moviePages.js/AddNewMovie";
import DeleteMovie from "./pages/moviePages.js/DeleteMovie";



export function App() {
    return (
        // <MainMovie request={requests.requestMovies}/>

// <MovieList/>
        <>
            <AuthContextProvider>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/details/:id'  element={<Details />} />
                    <Route path='/addMovie' element={<AddNewMovie />} />
                    <Route path='/delete' element={<DeleteMovie />} />
                    <Route
                        path='/account'
                        element={
                            <ProtectedRoute>
                                <Account />
                            </ProtectedRoute>
                        }
                    />
                </Routes>

            </AuthContextProvider>
        </>
    );
}

export default  App;
