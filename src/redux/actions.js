// src/redux/actions.js
export const FETCH_WORKSPACES_SUCCESS = 'FETCH_WORKSPACES_SUCCESS';
export const FETCH_WORKSPACES_FAILURE = 'FETCH_WORKSPACES_FAILURE';
export const FETCH_WORKSPACE_INFO_SUCCESS = 'FETCH_WORKSPACE_INFO_SUCCESS';
export const FETCH_WORKSPACE_INFO_FAILURE = 'FETCH_WORKSPACE_INFO_FAILURE';
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE';
export const SET_API_KEY = 'SET_API_KEY';

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
export const fetchProjectsSuccess = (workspaceId, projects) => ({
    type: FETCH_PROJECTS_SUCCESS,
    payload: { workspaceId, projects }
});

export const fetchProjectsFailure = (error) => ({
    type: FETCH_PROJECTS_FAILURE,
    payload: error
});

export const setApiKey = (apiKey) => ({
    type: SET_API_KEY,
    payload: apiKey
});
