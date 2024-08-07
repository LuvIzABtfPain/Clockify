// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setApiKey } from '../redux/actions';

const Home = () => {
    const [hasApiKey, setHasApiKey] = useState(false);
    const { userID, apikey } = useParams();
    const dispatch = useDispatch();
    const storedApiKey = useSelector(state => state.apiKey);

    useEffect(() => {
        if(apikey) {
            dispatch(setApiKey(apikey));
            setHasApiKey(true);
        } else if (userID) {
            fetch(`http://localhost:5000/get-api-key-by-user-id/${userID}`)
                .then(response => response.json())
                .then(data => {
                    setHasApiKey(data.hasApiKey);
                });
        }
    }, [userID, apikey, dispatch])

    const handleSubmit = (event) => {
        event.preventDefault();
        const apiKey = event.target.elements.apiKey.value;
        fetch('http://localhost:5000/save-api-key', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userID, apiKey })
        }).then(() => {
            setHasApiKey(true);
        });
    };
    return (
        <div className="Home">
            <header className="App-header">
                <h1>Workspace Manager</h1>
            </header>
            <div className="workspace-buttons">
                {hasApiKey ? (
                    <Link to="/workspaces">
                        <button className="workspace-button">View Workspaces</button>
                    </Link>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="apiKey" placeholder="Enter API Key" required />
                        <button type="submit">Submit</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Home;