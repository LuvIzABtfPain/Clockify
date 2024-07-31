// src/components/TaskList.js
import React from 'react';
import { useParams } from 'react-router-dom';

const TaskList = () => {
    const { projectId } = useParams();

    return (
        <div>
            <div className="List">
                <header className="App-header">
                    <h1>Task List for Project {projectId}</h1>
                </header>
            </div>
            <div className="task-list">
                {/* Task list content will go here */}
            </div>
        </div>
    );
};

export default TaskList;