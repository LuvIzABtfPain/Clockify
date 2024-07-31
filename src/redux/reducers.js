// src/redux/reducers.js
import {
    FETCH_WORKSPACES_SUCCESS,
    FETCH_WORKSPACES_FAILURE,
    FETCH_WORKSPACE_INFO_SUCCESS,
    FETCH_WORKSPACE_INFO_FAILURE
} from './actions';

const initialState = {
    workspaces: [],
    workspaceInfo: null,
    error: null
};

const workspaceReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WORKSPACES_SUCCESS:
            return {
                ...state,
                workspaces: action.payload,
                error: null
            };
        case FETCH_WORKSPACES_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case FETCH_WORKSPACE_INFO_SUCCESS:
            return {
                ...state,
                workspaceInfo: action.payload,
                error: null
            };
        case FETCH_WORKSPACE_INFO_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default workspaceReducer;