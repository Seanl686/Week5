import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export const HomePage = () => {
    return (
        <>
            <h1>Home Page</h1>
            <Link to="/profile" className="home-button">Go to Profile</Link>
        </>
    );
};