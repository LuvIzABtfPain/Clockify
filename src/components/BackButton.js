import React from 'react';
import {useNavigate} from "react-router-dom";
import { ReactComponent as BackArrow } from '../back-arrow.svg';
const BackButton = () => {
    let navigate = useNavigate();
    return (
        <div className="back-button">
            <button className="workspace-button" onClick={() => navigate(-1)}>
                <BackArrow className="back-arrow-icon" />
                Back
            </button>
        </div>
    );
}
export default BackButton;