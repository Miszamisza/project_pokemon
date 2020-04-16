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
                <div>{stat1Name}:</div><div>  {stat1Value}</div>
            </AbilitiesBox>
            <AbilitiesBox>
                <div>{stat2Name}:</div><div>  {stat2Value}</div>
            </AbilitiesBox>
            <AbilitiesBox>
                <div>{stat3Name}:</div><div>  {stat3Value}</div>
            </AbilitiesBox>
            <AbilitiesBox>
                <div>{stat4Name}:</div><div>  {stat4Value}</div>
            </AbilitiesBox>
            <AbilitiesBox>
                <div>{stat5Name}:</div><div>  {stat5Value}</div>
            </AbilitiesBox>
        </>
    )
};


export default PokemonSupriseDisplay;
