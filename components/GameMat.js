import React from "react"
import DropTraget from "./DropTarget"

export default class GameMat extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    allowDrop = (ev) => {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move"
    }

    onCardDropped = (ev) => {
        console.log(ev)
        var dragElemId = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(dragElemId));

    }

    render() {
        return (
            // <DropTraget onDrop={this.onCardDropped} style={{ ...this.props.style, "border": "2px red solid", display: "flex" }}>
            // <div style={{flexGrow: 1}}></div>
            <div onDragOver={this.allowDrop} onDrop={this.onCardDropped}
                style={{ ...this.props.style, "border": "2px red solid" }}></div>
            // </DropTraget>
        )
    }
}