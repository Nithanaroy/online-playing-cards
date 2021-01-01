import React from "react"
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
            <div>
                <div>PHOTO</div>
                <p>{this.props.name}</p>
                <div style={{"display": "flex"}}>
                {/* {this.props.cards.map(card => {
                    return <Card key={card} state="hide" style={{"margin": "0 0.5rem"}}></Card>
                })} */}
                </div>
            </div>
        )
    }
}