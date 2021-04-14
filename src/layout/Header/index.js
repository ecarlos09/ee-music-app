import React from 'react';

import './style.css';

const Heading = () => {
    return (
        <section className="heading">
            <div id="title-icon">
                <i className="fas fa-record-vinyl"></i>
            </div>
            <div id="title">
                <h1>Choonsic Music</h1>
                <h5>A place for you to choose some sick choons ...</h5>
            </div>
        </section>
    )

}

export default Heading;