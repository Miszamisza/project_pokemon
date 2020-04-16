import React from "react";
import {AbilitiesBox, PokeBox} from "../css/styles";


const PokemonSupriseDisplay = ({pokemon}) => {
    const {id, name, type, stat1Name, stat1Value, stat2Name, stat2Value, stat3Name, stat3Value, stat4Name, stat4Value, stat5Name, stat5Value} = pokemon;
    return (
        <>
            <PokeBox>
                <img src={`/img/sprites/${id}.png`} alt={'name'}/>
                <div> Name: {name} </div>
                <div> Type: {type} </div>
            </PokeBox>
            <AbilitiesBox>
                <div>{stat1Name}: {stat1Value}</div>
                <div>{stat2Name}: {stat2Value}</div>
                <div>{stat3Name}: {stat3Value}</div>
                <div>{stat4Name}: {stat4Value}</div>
                <div>{stat5Name}: {stat5Value}</div>
            </AbilitiesBox>
        </>
    )
};


export default PokemonSupriseDisplay;
