import React, {Component} from 'react';
import Modal from 'react-awesome-modal';
import {Typography} from "@material-ui/core";
import {MyBox, MyButton} from "../../css/styles";
import PokemonSupriseDisplay from "../../pages/PokemonSupriseDisplay";
import Pokemon from "../../pages/Pokemon";

export default class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            pokemon: props.pokemon,
            pokemonDetails: ""
        }
    }

    openModal() {
        const pokemon = new Pokemon(this.state.pokemon);
        this.setState({visible: true});

        this.setState({pokemonDetails: pokemon});
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    render() {

        return (
            <>
                <MyButton value="Open" onClick={() => this.openModal()}>Open</MyButton>
                <Modal visible={this.state.visible} width="800" height="600" effect="fadeInUp"
                       onClickAway={() => this.closeModal()}>
                    <div>
                        <Typography variant={'h2'}>Stats</Typography>
                        <MyBox>
                            <PokemonSupriseDisplay pokemon={this.state.pokemonDetails}/>
                            <MyButton onClick={() => this.closeModal()}>Close</MyButton>
                        </MyBox>

                    </div>
                </Modal>
            </>
        );
    }
}
