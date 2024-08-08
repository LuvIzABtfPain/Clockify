// src/components/ProjectList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjectsSuccess, fetchProjectsFailure } from '../redux/actions';
import { useNavigate, useParams } from 'react-router-dom';

const ProjectList = () => {
    const { workspaceId } = useParams();
    const dispatch = useDispatch();
    const projects = useSelector(state => state.workspaces.projects[workspaceId] || []);
    const error = useSelector(state => state.workspaces.error);
    const apikey = useSelector(state => state.workspaces.apikey);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://api.clockify.me/api/v1/workspaces/${workspaceId}/projects`, {
            method: 'GET',
            headers: {
                'x-api-key': apikey,
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                dispatch(fetchProjectsSuccess(workspaceId, data));
            })
            .catch(error => {
                dispatch(fetchProjectsFailure('Failed to fetch projects: ' + error.message));
            });
    }, [workspaceId, dispatch, apikey]);

    return (
        <div>
            <div className="List">
                <header className="App-header">
                    <h1>Project List</h1>
                </header>
            </div>
            <div className="workspace-buttons">
                <div className="project-head">
                    <span className="project-name">PROJECT NAME</span>
                    <span className="project-client">CLIENT NAME</span>
                </div>
                {error && <div className="error">{error}</div>}
                {projects.map(project => (
                    <div
                        className="project-row"
                        key={project.id}
                        onClick={() => navigate(`/projectdetails/${project.id}/tasks`)}
                    >
                        <span className="project-name">{project.name}</span>
                        <span className="project-client">{project.clientName || 'No Client'}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;