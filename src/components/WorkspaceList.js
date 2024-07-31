// src/components/WorkspaceList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWorkspacesSuccess, fetchWorkspacesFailure } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const WorkspaceList = () => {
    const dispatch = useDispatch();
    const workspaces = useSelector(state => state.workspaces.workspaces);
    const error = useSelector(state => state.workspaces.error);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://api.clockify.me/api/v1/workspaces', {
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
                dispatch(fetchWorkspacesFailure('Failed to fetch workspaces: ' + error.message));
            });
    }, [dispatch]);

    return (
        <div className="workspace-buttons">
            {error && <div className="error">{error}</div>}
            {workspaces.map(workspace => (
                <button
                    className="workspace-button"
                    key={workspace.id}
                    onClick={() => navigate(`/workspacedetails/${workspace.id}`)}
                >
                    {workspace.name}
                </button>
            ))}
        </div>
    );
};

export default WorkspaceList;