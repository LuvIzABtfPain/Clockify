// src/components/ProjectList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjectsSuccess, fetchProjectsFailure } from '../redux/actions';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from "./BackButton";

const ProjectList = () => {
    const { workspaceId } = useParams();
    const dispatch = useDispatch();
    const projects = useSelector(state => state.workspaces.projects[workspaceId] || []);
    const error = useSelector(state => state.workspaces.error);
    const apikey = useSelector(state => state.workspaces.apikey);
    const navigate = useNavigate();
    const [timeEntries, setTimeEntries] = useState([]);

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
        fetch(`http://localhost:5000/get-time-entries/${workspaceId}`, {
            method: 'GET',
            headers: {
                'x-api-key': apikey,
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                setTimeEntries(data);
            })
            .catch(error => {
                console.error('Failed to fetch time entries:', error);
            });
    }, [workspaceId, dispatch, apikey]);

    return (
        <div>
            <div className="List">
                <header className="App-header">
                    <h1>Project List</h1>
                </header>
            </div>
            <BackButton/>
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
                        onClick={() => navigate(`/projectdetails/${workspaceId}/${project.id}/tasks`)}
                    >
                        <span className="project-name">{project.name}</span>
                        <span className="project-client">{project.clientName || 'No Client'}</span>
                    </div>
                ))}
            </div>
            <div className="time-entries">
            <h2>Time Entries</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Description</th>
                    <th>Tag IDs</th>
                    <th>User ID</th>
                    <th>Task ID</th>
                    <th>Project ID</th>
                    <th>Start</th>
                    <th>End</th>
                    <th>Duration</th>
                </tr>
                </thead>
                <tbody>
                {timeEntries.map(te => (
                    <tr key={te.id}>
                        <td>{te.id}</td>
                        <td>{te.description}</td>
                        <td>{te.tagIds ? te.tagIds.join(', ') : ''}</td>
                        <td>{te.userId}</td>
                        <td>{te.taskId}</td>
                        <td>{te.projectId}</td>
                        <td>{te.timeInterval.start}</td>
                        <td>{te.timeInterval.end}</td>
                        <td>{te.timeInterval.duration}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ProjectList;