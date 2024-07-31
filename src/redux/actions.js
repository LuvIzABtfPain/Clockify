// src/redux/actions.js
export const FETCH_WORKSPACES_SUCCESS = 'FETCH_WORKSPACES_SUCCESS';
export const FETCH_WORKSPACES_FAILURE = 'FETCH_WORKSPACES_FAILURE';
export const FETCH_WORKSPACE_INFO_SUCCESS = 'FETCH_WORKSPACE_INFO_SUCCESS';
export const FETCH_WORKSPACE_INFO_FAILURE = 'FETCH_WORKSPACE_INFO_FAILURE';

export const fetchWorkspacesSuccess = (workspaces) => ({
    type: FETCH_WORKSPACES_SUCCESS,
    payload: workspaces
});

export const fetchWorkspacesFailure = (error) => ({
    type: FETCH_WORKSPACES_FAILURE,
    payload: error
});

export const fetchWorkspaceInfoSuccess = (workspaceInfo) => ({
    type: FETCH_WORKSPACE_INFO_SUCCESS,
    payload: workspaceInfo
});

export const fetchWorkspaceInfoFailure = (error) => ({
    type: FETCH_WORKSPACE_INFO_FAILURE,
    payload: error
});
