import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import PokemonSuprise from "./components/PokemonSuprise";
//import SearchPokemons from "./components/SearchPokemons";
import "./css/App.css";
import Popup from "reactjs-popup";


export const App = () => {
  return (
      <>
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
            {/*<Route exact path="/SearchPokemon">*/}

            {/*</Route>*/}
            <Route exact path="/PokemonSuprise">
              <PokemonSuprise/>
            </Route>
          </Switch>
        </Router>
          <Popup></Popup>
      </>
  );
};

export default App;
