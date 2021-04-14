import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Greeting, RandNumGen } from '../../components';

const Home = () => {
    return (
        <>
            <h1>Welcome to our site!</h1>
            <Greeting />
            <h5>Need a random number?</h5>
            <RandNumGen />
        </>
    )
}

export default Home;