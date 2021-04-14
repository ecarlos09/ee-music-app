import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
    const history = useHistory();

    return (
        <>
            <button id="back-button" onClick={history.goBack}>
                <i class="fas fa-step-backward"></i>
                Choobacker
            </button>
        </>
    )
}

export default BackButton;