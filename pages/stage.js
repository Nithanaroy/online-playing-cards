import React from "react"
import Deck from '../components/Deck'
import CurrentPlayer from "../components/CurrentPlayer"
import RemotePlayer from "../components/RemotePlayer"
import GameMat from "../components/GameMat"

export default class Stage extends React.Component {

    thisPlayerRegionId = "currentPlayer"

    constructor() {
        super();
        this.state = {
            currentUserId: "Nitin",
            ownerships: {},
            players: ["Nitin"]
        }
    }

    tryUpdateOwnerForCard = (cardId, newOwner) => {
        if (this.state.ownerships[cardId] === undefined) {
            const newOwnerships = { ...this.state.ownerships, [cardId]: newOwner }
            this.setState({ ownerships: newOwnerships });
            return true;
        }
    }

    findOwnerOfRegion = (cardRef) => {
        const thisPlayerRegion = document.getElementById(this.thisPlayerRegionId).getBoundingClientRect();
        const cardRegion = cardRef.getBoundingClientRect();
        if (this.checkIfCardInRegion(cardRegion, thisPlayerRegion)) {
            return this.state.currentUserId;
        }
    }

    assignOwner = (e, data) => {
        this.tryUpdateOwnerForCard(data.node.getAttribute("id"), this.findOwnerOfRegion(data.node));
    }

    checkIfCardInRegion(cardRegion, targetRegion) {
        // more than 50% of area of the card should be in the region
        const commonRegionTop = Math.max(cardRegion.top, targetRegion.top)
        const commonRegionBottom = Math.min(cardRegion.bottom, targetRegion.bottom)
        const commonRegionLeft = Math.max(cardRegion.left, targetRegion.left)
        const commonRegionRight = Math.min(cardRegion.right, targetRegion.right)
        const commonRegionArea = Math.max((commonRegionBottom - commonRegionTop) * (commonRegionRight - commonRegionLeft), 0)
        const cardArea = (cardRegion.bottom - cardRegion.top) * (cardRegion.right - cardRegion.left)
        const cardOverlapFractionForRegion = commonRegionArea / cardArea;
        return cardOverlapFractionForRegion >= 0.5;
    }

    cardsOfUser = (userId) => {
        return Object.keys(this.state.ownerships).filter(cardId => this.state.ownerships[cardId] === userId)
    }

    render() {
        return (
            <div style={{ "display": "flex", "flexDirection": "row", "flexGrow": 1 }}>
                <div style={{ "flexGrow": 1, "display": "flex", "flexDirection": "column" }}>
                    <h1>Your room ID: 2344</h1>
                    <div style={{ "display": "flex", width: "100%", "flexGrow": 1 }}>
                        <Deck numDecks="1" onCardDragStop={this.assignOwner}></Deck>
                        <GameMat className="cardDragBound" style={{ "flexGrow": 1 }}></GameMat>
                    </div>
                    <CurrentPlayer id={this.thisPlayerRegionId} name="Nitin" cards={this.cardsOfUser("Nitin")}></CurrentPlayer>
                </div>
                <div style={{ "display": "flex", "flexDirection": "column" }}>
                    <RemotePlayer name="Atasi" id="remote1"></RemotePlayer>
                </div>
            </div>
        )
    }
}