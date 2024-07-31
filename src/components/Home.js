// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="Home">
            <header className="App-header">
                <h1>Workspace Manager</h1>
            </header>
            <div className="workspace-buttons">
                <Link to="/workspaces">
                    <button className="workspace-button">View Workspaces</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;