import React from "react";
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';

export default class Card extends React.Component {

    genericHiddenCard = "-4px -441px";

    constructor(props) {
        super(props);
        this.state = {
            face: this.props.state
        }
        this.cardUI = this.genericHiddenCard;
        this.computeCardUI();
    }

    computeCardUI = () => {
        const validCardPositions = [
            "-675px -3px", "-830px -3px", "-985px -3px",
            "-675px -209px", "-830px -209px", "-985px -209px",
            "-160px -441px", "-315px -441px", "-470px -441px", "-625px -441px",
            "-775px -416px", "-930px -416px",
            "-1px -647px", "-156px -647px", "-310px -647px", "-465px -647px", "-620px -647px",
            "-773px -688px", "-927px -688px",
            "-3px -855px", "-157px -855px", "-311px -855px", "-465px -855px", "-619px -855px",
            "-773px -895px", "-927px -895px",
            "-3px -1061px", "-157px -1061px", "-311px -1061px", "-465px -1061px", "-619px -1061px",
            "-773px -1101px", "-927px -1101px",
            "-3px -1267px", "-157px -1267px", "-311px -1267px", "-465px -1267px", "-619px -1267px",
            "-773px -1307px", "-927px -1307px",
            "-3px -1473px", "-157px -1473px", "-311px -1473px", "-465px -1473px", "-619px -1473px",
            "-773px -1513px",
            "-3px -1679px", "-157px -1679px", "-311px -1679px", "-465px -1679px", "-619px -1679px",
            "-773px -1719px"
        ]
        const selectedCard = parseInt(this.props.cardIndex);
        if (selectedCard >= 0 && selectedCard < validCardPositions.length) {
            this.cardUI = validCardPositions[selectedCard]
        }
    }

    flip = () => {
        const newFaceState = this.state.face === "hide" ? "show" : "hide"
        this.setState({ face: newFaceState })
    }

    render() {
        const card = (
            <div id={this.props.id} style={{ ...this.props.style }}>
                <a style={{
                    display: "block", "backgroundImage": 'url("/deck.png")', "width": "150px", "height": "202px",
                    "backgroundPosition": this.state.face === "show" ? this.cardUI : this.genericHiddenCard
                }}></a>
                <button id="flipCardButton" onClick={this.flip} style={{ "display": "block", position: "absolute", bottom: "10px", left: "60px" }}>Flip</button>
            </div>
        )
        const draggableCard = (
            <Draggable onStart={this.props.handleStart} onDrag={this.props.handleDrag} onStop={this.props.onDragStop}>
                {card}
            </Draggable>
        )
        return this.props.draggable === "false" ? card : draggableCard
    }
}

Card.propTypes = {
    "id": PropTypes.string.isRequired
}