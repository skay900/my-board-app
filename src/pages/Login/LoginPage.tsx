import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/LoginPage.css';

const LoginPage = () => {
    return (
        <div className="login">
            <h1>Login Page</h1>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <button type="submit">Login</button>
            </form>
            <Link to="/" className="back-button">Back to Main</Link>
        </div>
    );
}

export default LoginPage;