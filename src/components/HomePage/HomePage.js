import React, {Component} from "react";
import {MyBox, MyButton, MyHeader} from "../../css/styles";
import WarningIcon from '@material-ui/icons/Warning';
import PokemonDisplay from "../../pages/AllPokemonDisplay";



class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allPokemons: [],
            pokemonDetails: [],
            errorMessage: "",
            offset: 0,
            loadNumber: 12
        };
        this.handleNextPage = this.handleNextPage.bind(this);
    }

    getNextOffset() {
        return (this.state.offset + this.state.loadNumber);
    }

    handleNextPage(event) {
        const newOffset = this.getNextOffset();
        this.setState({offset: newOffset}, () => {
            this.componentWillMount();
        });
    }


    componentWillMount() {
        let url = "https://pokeapi.co/api/v2/pokemon?offset=" + this.state.offset + "&limit=" + this.state.loadNumber;
        fetch(url)
            .then(res => res.json())
            .then(response => {
                if (response) {
                    this.setState({allPokemons: response.results});

                    this.state.allPokemons.map(pokemon => {
                        fetch(pokemon.url)
                            .then(response => response.json())
                            .then(data => {
                                if (data) {
                                    let temp = this.state.pokemonDetails;
                                    temp.push(data);
                                    this.setState({pokemonDetails: temp})
                                }
                            })
                            .catch(err => {
                                this.setState({errorMessage: err.message})
                            })
                    })
                }
            })
            .catch(err => {
                this.setState({errorMessage: err.message})
            })
    };

    render() {
        const {pokemonDetails, errorMessage} = this.state;
        const PokemonList = pokemonDetails.map((pokemon, index) => {
            return (<PokemonDisplay pokemon={pokemon} key={index}/>);
        });
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
                    <MyHeader>Pokedex</MyHeader>
                    <MyBox>{PokemonList}</MyBox>
                    <MyButton type='button' onClick={this.handleNextPage}>Next Page</MyButton>
                </div>
            )

        }
    }
}

export default HomePage;
