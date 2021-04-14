import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Greeting } from '../../components';

const Home = () => {
    return (
        <>
            <h1>Welcome to our site!</h1>
            <Greeting />
        </>
    )
}

export default Home;