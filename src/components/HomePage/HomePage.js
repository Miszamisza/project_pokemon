import React, {Component} from "react";
import {MyBox, MyButton, MyHeader} from "../../css/styles";
import WarningIcon from '@material-ui/icons/Warning';
import PokemonDisplay from "../../pages/PokemonDisplay";
import Pokemon from "../../pages/Pokemon";
import PaginationUtility from "../../utils/Pagination";


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allPokemons: [],
            pagePokemons: [],
            errorMessage: "",
            offset: 0,
            loadNumber: 12,
            totalPages: 0,
            page: 1
        };
        this.handleNextPage = this.handleNextPage.bind(this);
    }

    getNextOffset() {
        return (this.state.offset + this.state.loadNumber);
    }

    handleNextPage(event) {
        const newOffset = this.getNextOffset();
        let {page, pagePokemons, totalPages} = new PaginationUtility().execute(this.state.loadNumber, this.state.page, this.state.allPokemons);
        this.setState({page: page, pagePokemons: pagePokemons, totalPages: totalPages });
        this.setState({offset: newOffset}, () => {
            this.componentWillMount();
        });
    }


    componentWillMount() {
        for (let i = 1; i < 151; i++) {
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
            })
            .catch(err => {
                this.setState({errorMessage: err.message})
            });

    }

    render() {
        const {pagePokemons, errorMessage} = this.state;
        const PokemonList = pagePokemons.map((pokemon, index
                                             ) => {
            return (<PokemonDisplay pokemon={pokemon} key={pokemon.id}/>);
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
