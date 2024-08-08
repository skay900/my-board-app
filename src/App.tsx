import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import BoardPage from './pages/Board/BoardPage';
import LoginPage from './pages/Login/LoginPage';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<HomePage/>} />
      <Route path={'/board'} element={<BoardPage/>} />
      <Route path={'/login'} element={<LoginPage/>} />
    </Routes>
  );
}

export default App;
