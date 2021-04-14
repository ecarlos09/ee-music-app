import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
    const history = useHistory();

    return (
        <>
            <button id="back-button" onClick={history.goBack}>
                <i className="fas fa-step-backward"></i>
                Choobacker
            </button>
        </>
    )
}

export default BackButton;