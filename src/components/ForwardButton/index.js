import React from 'react';
import { useHistory } from 'react-router-dom';

const ForwardButton = () => {
    const history = useHistory();

    return (
        <>
            <button id="Forward-button" onClick={history.goForward}>Choo choo!</button>
        </>
    )
}

export default ForwardButton;