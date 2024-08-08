import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/HomePage.css';

const HomePage = () => {
    return (
        <div className="main">
            <h1>Main Page</h1>
            <div className="buttons">
                <Link to="/login" className="button">Go to Login</Link>
                <Link to="/board" className="button">Go to Board</Link>
            </div>
        </div>
    );
}

export default HomePage;
