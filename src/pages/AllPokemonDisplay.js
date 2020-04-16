import React from "react";
import {PokeBox} from "../css/styles";
import Popup from "../components/Popup/Popup";

const PokemonDisplay = ({pokemon}) => {

    return (
        <PokeBox>
            <img src={`/img/sprites/${pokemon.id}.png`} alt={'pokemon.name'}/>
            <div> {pokemon.name} </div>
            <div> Height: {pokemon.height} </div>
            <Popup id={pokemon.id}></Popup>
        </PokeBox>
    )
};


export default PokemonDisplay;
