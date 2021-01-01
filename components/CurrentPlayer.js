import Player from "./Player"
import Card from "./Card"

export default class CurrentPlayer extends Player {
    constructor() {
        super();
        this.state = {}
    }

    deal = () => {
        this.setState({ cardId: this.state.cardId - 1 })
    }

    render() {
        return (
            <div id={this.props.id} style={{height: "300px", border: "2px solid white"}}>
                <div>PHOTO</div>
                <p>{this.props.name}</p>
                <div style={{"display": "flex"}}>
                {/* {this.props.cards.map(card => console.log(card))} */}
                </div>
            </div>
        )
    }
}