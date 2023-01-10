import React from "react";
import Navbar from "./components/navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import {AuthContextProvider} from "./context/AuthContext";
import Login from "./pages/account/Login";
import Account from "./pages/account/Account";
import Signup from "./pages/account/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import SearchMovie from "./pages/SearchMovie";
import Details from "./pages/Details";
import Upcoming from "./pages/Upcoming";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import Trending from "./pages/Trending";
import Horror from "./pages/Horror";


export function App() {
    return (
        <>
            <AuthContextProvider>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/searchMovie' element={<SearchMovie />} />
                    <Route path='/details' element={<Details />} />
                    <Route path='/upcoming' element={<Upcoming />} />
                    <Route path='/popular' element={<Popular />} />
                    <Route path='/toprated' element={<TopRated />} />
                    <Route path='/trending' element={<Trending />} />
                    <Route path='/horror' element={<Horror />} />
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
