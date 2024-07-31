// src/components/WorkspaceDetails.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWorkspaceInfoSuccess, fetchWorkspaceInfoFailure } from '../redux/actions';
import { useParams } from 'react-router-dom';

const WorkspaceDetails = () => {
    const { workspaceId } = useParams();
    const dispatch = useDispatch();
    const workspaceInfo = useSelector(state => state.workspaces.workspaceInfo);
    const error = useSelector(state => state.workspaces.error);
    const loading = useSelector(state => state.workspaces.loading);

    useEffect(() => {
        dispatch({ type: 'FETCH_WORKSPACE_INFO_LOADING' }); // Optional: Handle loading state

        fetch(`https://api.clockify.me/api/v1/workspaces/${workspaceId}`, {
            method: 'GET',
            headers: {
                'x-api-key': 'YWQ2YmY3NjUtYTM0OC00ZmQ1LWE5NTMtMmM2MTYyNDQxMDNh',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                dispatch(fetchWorkspaceInfoSuccess(data));
            })
            .catch(error => {
                dispatch(fetchWorkspaceInfoFailure('Failed to fetch workspace info: ' + error.message));
            });
    }, [workspaceId, dispatch]);

    return (
        <div className="workspace-info">
            {loading && <div className="loading">Loading...</div>}
            {error && <div className="error">{error}</div>}
            {workspaceInfo && (
                <>
                    <h2>Workspace Details</h2>
                    <pre>{JSON.stringify(workspaceInfo, null, 2)}</pre>
                </>
            )}
        </div>
    );
};

export default WorkspaceDetails;