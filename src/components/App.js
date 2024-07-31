// src/components/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import WorkspaceList from './WorkspaceList';
import WorkspaceDetails from './WorkspaceDetails';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/workspaces" element={<WorkspaceList />} />
                    <Route path="/workspacedetails/:workspaceId" element={<WorkspaceDetails />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;