// src/components/TaskList.js
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {fetchProjectsFailure} from "../redux/actions";
import BackButton from "./BackButton";

const TaskList = () => {
    const { projectId, workspaceId } = useParams();
    const apikey = useSelector(state => state.workspaces.apikey);
    const dispatch = useDispatch();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`https://api.clockify.me/api/v1/workspaces/${workspaceId}/projects/${projectId}/tasks`, {
            method: 'GET',
            headers: {
                'x-api-key': apikey,
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                setTasks(data);
            })
            .catch(error => {
                dispatch(fetchProjectsFailure('Failed to fetch tasks: ' + error.message));
            });
    }, [workspaceId, projectId, apikey, dispatch]);
    return (
        <div>
            <div className="List">
                <header className="App-header">
                    <h1>Task List for Project {projectId}</h1>
                </header>
            </div>
            <BackButton/>
            <div className="task-list">
                <div className="project-head">
                    <span className="project-name">TASK NAME</span>
                    <span className="project-client">ASSIGNEE ID</span>
                    <span className="project-client">STATUS</span>
                </div>
                {tasks.map(task => (
                    <div key={task.id} className="task-item project-row">
                        <span className="task-name project-name">{task.name}</span>
                        <span className="project-client">{ task.assigneeIds ? task.assigneeIds.join(', ') : task.assigneeId }</span>
                        <span className={`task-status ${task.status === 'ACTIVE' ? 'task-active' : 'task-inactive'}`}>{task.status}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskList;