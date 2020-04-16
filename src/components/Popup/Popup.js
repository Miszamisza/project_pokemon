import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import {
    Typography
} from "@material-ui/core";
import {MyButton} from "../../css/styles";

export default class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false,
            id: props.id
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>
                <MyButton value="Open" onClick={() => this.openModal()}>Open</MyButton>
                <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <Typography variant={'h3'}>Stats</Typography>

                        <MyButton onClick={() => this.closeModal()}>Close</MyButton>
                    </div>
                </Modal>
            </section>
        );
    }
}
