import React from 'react';
import { useHistory } from 'react-router-dom';

const ForwardButton = () => {
    const history = useHistory();

    return (
        <>
            <button id="Forward-button" onClick={history.goForward}>
                Choo choo!
                <i class="fas fa-step-forward"></i>
            </button>
        </>
    )
}

export default ForwardButton;