// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="Home">
            <header className="App-header">
                <h1>Workspace Manager</h1>
                <Link to="/workspaces">View Workspaces</Link>
            </header>
        </div>
    );
};

export default Home;