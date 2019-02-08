import React, { Component } from 'react';
import beer from '../images/beer.svg';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="header">
                    <h1>Beer Me Drinking Game!</h1>
                    <h2>Discover new beers and drink some too!!</h2>
                    <img className="header__img" src={beer} alt="beer"/>
                </header>
                <main className="main" role="main">
                    <p>This app is a simple drinking game. Set the Drunkeness level and click beer me. If the
                    returned beer has a higher abv level than your Drunkeness setting ya got to take a sip!!
                    Remember the lower the Drunkeness level the more sips ya got to take!!</p>
                    <p>Please Drink Responsibly!</p>
                </main>
            </div>
        );
    }
}

export default App;