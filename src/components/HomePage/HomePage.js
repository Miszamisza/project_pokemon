import React, {Component} from "react";
import {MyBox, MyButton, MyHeader} from "../../css/styles";
import WarningIcon from '@material-ui/icons/Warning';
import PokemonDisplay from "../../pages/PokemonDisplay";
import Pokemon from "../../pages/Pokemon";


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allPokemons: [],
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
        for (let i = 1; i < 10; i++) {
            this.randomPoekemon(i);
        }
    }

    randomPoekemon(id) {
        fetch(`http://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => res.json())
            .then(data => {
                const pokemon = new Pokemon(data);
                let temp = this.state.allPokemons;
                temp.push(pokemon);
                this.setState({allPokemons: temp});
                console.log(this.state.allPokemons)
            })
            .catch(err => {
                this.setState({errorMessage: err.message})
            })
    }

    render() {
        const {allPokemons, errorMessage} = this.state;
        const PokemonList = allPokemons.map((pokemon, index) => {
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
                <>
                    <MyHeader>Pokedex</MyHeader>
                    <MyBox>{PokemonList}</MyBox>
                    <MyButton type='button' onClick={this.handleNextPage}>Next Page</MyButton>
                </>
            )

        }
    }
}

export default HomePage;
