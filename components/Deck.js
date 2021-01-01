import React from "react"
import Card from "./Card"

export default class Deck extends React.Component {
    constructor() {
        super();
        this.cardsPerDeck = 52
        this.state = {
            cards: []
        }
    }

    deal = () => {
        // Unused: useful when you dont wish to pregenerate all the DOM nodes of all the cards - improves start up time
        while (true) {
            // Assuming all cards are unique (e.g. absence of jokers)
            const selectedCard = parseInt(Math.random() * this.cardsPerDeck);
            if (this.state.usedCards.filter(c => c === selectedCard).length < (this.props.numDecks || 1)) {
                this.setState({ usedCards: this.state.usedCards.push(selectedCard) })
                break;
            }
        }
    }

    createShuffledDecks = () => {
        // Ordered deck
        let [i, N] = [0, (parseInt(this.props.numDecks) || 1) * this.cardsPerDeck];
        const cards = Array(N);
        while (i < N) cards[i] = i++;

        // Shuffle it
        // Credits: https://stackoverflow.com/a/62713103/1585523
        const getRandomValue = (i, N) => Math.floor(Math.random() * (N - i) + i);
        cards.forEach((_, i, arr, j = getRandomValue(i, arr.length)) => [arr[i], arr[j]] = [arr[j], arr[i]]);
        this.setState({ cards });
    }

    componentDidMount() {
        this.createShuffledDecks();
    }

    render() {
        return (
            <div style={{ position: "relative" }}>
                <Card id="placeholderCard" style={{ visibility: "hidden" }} draggable="false" />
                {this.state.cards.map(card => {
                    return (
                        <Card state="show" key={card} id={`card${card}`}
                            cardIndex={card % this.cardsPerDeck} onDragStop={this.props.onCardDragStop}
                            style={{ position: "absolute", top: 0, left: 0 }}></Card>)
                })}
            </div>
        )
    }
}