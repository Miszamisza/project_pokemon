import React, {Component} from 'react';
import Modal from 'react-awesome-modal';
import {Typography} from "@material-ui/core";
import {MyBox, MyButton} from "../../css/styles";
import PokemonStatsDisplay from "../../pages/PokemonStatsDisplay";

export default class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            pokemon: props.pokemon,
        }
    }

    openModal() {
        this.setState({visible: true});
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
                            <PokemonStatsDisplay pokemon={this.state.pokemon}/>
                            <MyButton onClick={() => this.closeModal()}>Close</MyButton>
                        </MyBox>

                    </div>
                </Modal>
            </>
        );
    }
}
