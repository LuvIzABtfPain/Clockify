// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import workspaceReducer from './reducers';

const rootReducer = combineReducers({
    workspaces: workspaceReducer,
});

const store = createStore(rootReducer);

export default store;