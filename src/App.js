import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
// import RandomPokemon from "./pages/RandomPokemonDisplay";
//import SearchPokemons from "./components/SearchPokemons";
import "./css/App.css";


export const App = () => {
  return (
      <>
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/">

            </Route>
            {/*<Route exact path="/SearchPokemon">*/}

            {/*</Route>*/}
            {/*<Route exact path="/ComparePokemons">*/}

            {/*</Route>*/}
            {/*<Route exact path="/PokemonSuprise">*/}
            {/*  <RandomPokemon/>*/}
            {/*</Route>*/}
          </Switch>
        </Router>
        <HomePage/>
      </>
  );
};

export default App;
