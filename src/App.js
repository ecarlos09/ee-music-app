import React from 'react';

import Header from './components/Header';
import Artists from './components/Artists';
import Singles from './components/Singles';

function App() {
    return (
        <>
            <header>
                <Header />
            </header>

            <main>
                <Artists />
                <Singles />
            </main>

            <footer>

            </footer>
        </>
    );
}

export default App;