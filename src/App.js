import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import { Header, Footer } from './layout';
import { Home, About, Artists, Singles, Support, Contact } from './pages';

function App() {
    return (
        <>
            <nav>

            </nav>
            
            <header>
                <Header />
            </header>

            <Switch>
                <Route exact path ="/" component={Home} />
                <Route path ="/about" component={About} />
                <Route path ="/artists" component={Artists} />
                <Route path ="/singles" component={Singles} />
                <Route path ="/support" component={Support} />
                <Route path ="/contact" component={Contact} />
            </Switch>


            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default App;