import React from "react"
import Deck from '../components/Deck'
import CurrentPlayer from "../components/CurrentPlayer"
import RemotePlayer from "../components/RemotePlayer"
import GameMat from "../components/GameMat"

export default class Stage extends React.Component {

    constructor() {
        super();
        this.state = {
            currentUserId: "Nitin",
            ownerships: {},
            remotePlayers: ["Atasi", "AG", "MG"]
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
        const allOwners = [...this.state.remotePlayers, this.state.currentUserId]
        for (const owner of allOwners) {
            const ownerRegion = document.getElementById(owner).getBoundingClientRect();
            const cardRegion = cardRef.getBoundingClientRect();
            if (this.checkIfCardInRegion(cardRegion, ownerRegion)) {
                return owner;
            }    
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
        const commonRegionArea = Math.max((commonRegionBottom - commonRegionTop), 0) * Math.max((commonRegionRight - commonRegionLeft), 0)
        const cardArea = (cardRegion.bottom - cardRegion.top) * (cardRegion.right - cardRegion.left)
        const cardOverlapFractionForRegion = commonRegionArea / cardArea;
        return cardOverlapFractionForRegion > 0.5;
    }

    cardsOfUser = (userId) => {
        return Object.keys(this.state.ownerships).filter(cardId => this.state.ownerships[cardId] === userId)
    }

    render() {
        return (
            <div id="play-area" style={{ "display": "flex", "flexDirection": "row", "flexGrow": 1 }}>
                <div style={{ "flexGrow": 1, "display": "flex", "flexDirection": "column" }}>
                    <div>
                        <h1>Your room ID: 2344</h1>
                        <div>
                            <label htmlFor="currentUserTb">Current User</label>
                            <input type="text" name="currentUserTb" id="currentUserTb" value={this.state.currentUserId} 
                                onChange={(e) => this.setState({currentUserId: e.target.value}) } />
                        </div>
                    </div>
                    <div style={{ "display": "flex", "width": "100%", "flexGrow": 1 }}>
                        <Deck numDecks="1" onCardDragStop={this.assignOwner}></Deck>
                        <GameMat style={{ "flexGrow": 1 }}></GameMat>
                    </div>
                    <CurrentPlayer id={this.state.currentUserId} name={this.state.currentUserId} cards={this.cardsOfUser(this.state.currentUserId)}></CurrentPlayer>
                </div>
                <div style={{ "display": "flex", "flexDirection": "column", "minWidth": "150px" }}>
                    {this.state.remotePlayers.map(p => {
                        return (
                            <RemotePlayer key={p} name={p} id={p} style={{"flexGrow": 1}}></RemotePlayer>
                        )
                    })}
                </div>
            </div>
        )
    }
}