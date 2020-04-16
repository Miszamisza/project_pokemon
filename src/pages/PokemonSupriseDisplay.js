import React from "react";
import {PokeBox} from "../css/styles";


const PokemonSupriseDisplay = ({pokemon}) => {
    const {id, name, sprite, type, stat1Name, stat1Value, stat2Name, stat2Value, stat3Name, stat3Value, stat4Name, stat4Value, stat5Name, stat5Value} = pokemon;
    return (
        <>
            <PokeBox>
                <img src={`/img/sprites/${id}.png`}/>
                <div> Name: {name} </div>
                <div> Type: {type} </div>
            </PokeBox>
            <PokeBox>
                <div>{stat1Name}: {stat1Value}</div>
                <div>{stat2Name}: {stat2Value}</div>
                <div>{stat3Name}: {stat3Value}</div>
                <div>{stat4Name}: {stat4Value}</div>
                <div>{stat5Name}: {stat5Value}</div>
            </PokeBox>
        </>
    )
};


export default PokemonSupriseDisplay;
