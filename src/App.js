import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { NavBar, Header, Footer } from './layout';
import { Home, About, Music, Support, Contact } from './pages';

function App() {
    return (
        <>
            <section className="top">
                <NavBar />          
                <header>
                    <Header />
                </header>                
            </section>
            
            <Switch>
                <Route exact path ="/" component={Home} />
                <Route path ="/about" component={About} />
                <Route path ="/music" component={Music} />
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