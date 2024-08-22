import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from "../components/Header/Header";
import MainPage from "../pages/Main/MainPage";
import BoardPage from "../pages/Board/BoardPage";
import LoginPage from "../pages/Login/LoginPage";

const sections = [
    { title: 'Board', url: '/board' }
];

const AppRouter = () => {
    return (
        <>
            <Header title={'Blog'} sections={sections} />
            <Routes>
                <Route path="/" element={<MainPage title={'title'} posts={['abc']} />} />
                <Route path="/board" element={<BoardPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </>
    );
}

export default AppRouter;
