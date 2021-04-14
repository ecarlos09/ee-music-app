import React from 'react';

import { Header, Footer } from './layout';
import { Artists, Singles } from './components';

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
                <Footer />
            </footer>
        </>
    );
}

export default App;