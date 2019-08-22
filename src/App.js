import React , {Component} from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ThePokemons from './ThePokemons';
import './App.css';
import SinglePokemon from './SinglePokemon';
import {Link} from 'react-router-dom';



const client = new ApolloClient({
  uri: 'https://pokemon-samdavies.stylindex.now.sh'
});



class App extends Component{
    render(){
    return(
      <Router>
        <ApolloProvider client= {client}>
          <div>
          <Route path="/" exact component={Home}/>
          <Route path= "/ThePokemons" component={ThePokemons} />
          <Route path= "/SinglePokemon/:id" component={SinglePokemon}/>
           </div>
        </ApolloProvider>
      </Router>
  )
  }
}

const Home = () => (
  <div>
    <Link to={`/ThePokemons`}>
     <h1 className="headerFront"> Click for Pokemon! </h1>
    </Link>
      <Link to={`/ThePokemons`}>
    <img src="https://media.giphy.com/media/yhfTY8JL1wIAE/giphy.gif" className="gif"/>
      </Link>
      </div>
);

export default App;






/*<div className="App">
  <header className="App-header">
  <h1 className ="App-title">
  Pokemon
  </h1>
  </header>
  </div>
  */

/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
