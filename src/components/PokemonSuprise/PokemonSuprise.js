import React, {Component} from "react";
import {MyBox, MyButton, MyHeader} from "../../css/styles";
import WarningIcon from '@material-ui/icons/Warning';
import PokemonSupriseDisplay from "../../pages/PokemonSupriseDisplay"
import Pokemon from "../../pages/Pokemon";


class PokemonSuprise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomPokemon: "",
            errorMessage: "",
        };
        this.handleRandomPokemon = this.handleRandomPokemon.bind(this);
    }


    random() {
        let randomNumber = Math.floor(
            Math.random(0) * 151
        );
        this.randomPoekemon(randomNumber);
    }

    handleRandomPokemon(event) {
        this.random();
    }


    componentWillMount() {
        this.random();
    }

    randomPoekemon(randomId) {
        fetch(`http://pokeapi.co/api/v2/pokemon/${randomId}/`)
            .then(res => res.json())
            .then(data => {
                const pokemon = new Pokemon(data);

                this.setState({randomPokemon: pokemon});
                console.log(this.state.randomPokemon)
            })
            .catch(err => {
                this.setState({errorMessage: err.message})
            })
    }

    render() {
        const {randomPokemon, errorMessage} = this.state;
        if (errorMessage) {
            return (
                <div>
                    <MyHeader>
                        <WarningIcon style={{fontSize: 200}}/>
                        <p>Server is not available.</p><p>Try again later</p>
                    </MyHeader>
                </div>
            )
        } else {
            return (
                <div>
                    <MyHeader>Pokemon suprise for you</MyHeader>
                    <MyBox><PokemonSupriseDisplay pokemon={randomPokemon}/></MyBox>
                    <MyButton type='button' onClick={this.handleRandomPokemon}>Try Again</MyButton>
                </div>
            )

        }
    }
}

export default PokemonSuprise;
