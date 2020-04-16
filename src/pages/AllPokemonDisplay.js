import React from "react";
import {PokeBox} from "../css/styles";


const PokemonDisplay = ({pokemon}) => {

    return (
        <PokeBox>
            <img src={`/img/sprites/${pokemon.id}.png`}/>
            <div> {pokemon.name.toUpperCase()} </div>
            <div> Height: {pokemon.height} </div>
        </PokeBox>
    )
};


export default PokemonDisplay;
