import React from "react"
import Player from "./Player"
import Card from "./Card"

export default class CurrentPlayer extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    deal = () => {
        this.setState({ cardId: this.state.cardId - 1 })
    }

    render() {
        return (
            <Player id={this.props.id} style={{...this.props.style}}>
                <div style={{ height: "300px", border: "2px solid white" }}>
                    <div>PHOTO</div>
                    <p>{this.props.name}</p>
                    <div style={{ "display": "flex" }}>
                        {/* {this.props.cards.map(card => console.log(card))} */}
                    </div>
                </div>
            </Player>
        )
    }
}