// src/components/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import WorkspaceList from './WorkspaceList';
import ProjectList from './ProjectList';
import TaskList from './TaskList';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:userID" element={<Home />} />
                    <Route path="/apikey/:apikey" element={<Home />} />
                    <Route path="/workspaces" element={<WorkspaceList />} />
                    <Route path="/projectList/:workspaceId" element={<ProjectList />} />
                    <Route path="/projectdetails/:workspaceId/:projectId/tasks" element={<TaskList />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;