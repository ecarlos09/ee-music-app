import React from 'react';
import { Artists, Singles } from '../../components';
import { Switch, Route } from 'react-router-dom';

const Music = () => {
    return (
        <>
            <h1>Check out these artists and their music!</h1>;
            <Artists />
            <Singles />
        </>
    )
};

export default Music;