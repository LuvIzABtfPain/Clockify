// src/components/ProjectList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWorkspacesSuccess, fetchWorkspacesFailure } from '../redux/actions';
import { useNavigate, useParams } from 'react-router-dom';

const ProjectList = () => {
    const { workspaceId } = useParams();
    const dispatch = useDispatch();
    const projects = useSelector(state => state.workspaces.projects);
    const error = useSelector(state => state.workspaces.error);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://api.clockify.me/api/v1/workspaces/${workspaceId}/projects`, {
            method: 'GET',
            headers: {
                'x-api-key': 'YWQ2YmY3NjUtYTM0OC00ZmQ1LWE5NTMtMmM2MTYyNDQxMDNh',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                dispatch(fetchWorkspacesSuccess(data));
            })
            .catch(error => {
                dispatch(fetchWorkspacesFailure('Failed to fetch projects: ' + error.message));
            });
    }, [workspaceId, dispatch]);

    return (
        <div>
            <div className="List">
                <header className="App-header">
                    <h1>Project List</h1>
                </header>
            </div>
            <div className="project-buttons">
                {error && <div className="error">{error}</div>}
                {projects.map(project => (
                    <button
                        className="project-button"
                        key={project.id}
                        onClick={() => navigate(`/projectdetails/${project.id}/tasks`)}
                    >
                        {project.name} - {project.clientName || 'No Client'}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;