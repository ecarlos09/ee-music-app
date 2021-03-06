import React, { useState } from 'react';

const Greeting = () => {
    const [ username, setUsername ] = useState("");
    const [ nameInput, setNameInput ] = useState("");

    const handleInput = e => setNameInput(e.target.value);

    const handleFormSubmit = e => {
        e.preventDefault();
        setUsername(nameInput);
        setNameInput("");
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="username">Who's visiting today?</label>
                <input type="text" id="username" name="username" placeholder="Choose carefully ..." value={nameInput} onChange={handleInput} />
                <input type="submit" value="Tell us!" />
            </form>

            <h2 aria-label="greeting" id="greeting">
                Thanks for Choo-sing to visit us, {username ? username : "friend"}!
            </h2>

            <h3>
                Trending today
            </h3>
        </>
    )
}

export default Greeting;