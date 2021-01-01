import React from "react"
import Deck from '../components/Deck'
import CurrentPlayer from "../components/CurrentPlayer"
import RemotePlayer from "../components/RemotePlayer"
import GameMat from "../components/GameMat"

export default class Stage extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    onCardDragStop = (e) => {
        console.log(e)
    }

    render() {
        return (
            <div style={{"display": "flex", "flexDirection": "column", flexGrow: 1}}>
                <h1>
                    Your room ID: 2344
                    </h1>

                <div style={{ "display": "flex", width: "100%", flexGrow: 1 }}>
                    <Deck numDecks="1"></Deck>
                    <GameMat className="cardDragBound" style={{ "flexGrow": 1 }}></GameMat>
                </div>
                <RemotePlayer name="Atasi"></RemotePlayer>
                <CurrentPlayer name="Nitin" cards={[1, 2, 3]}></CurrentPlayer>
            </div>
        )
    }
}