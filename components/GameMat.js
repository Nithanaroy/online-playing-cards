import React from "react"
import DropTraget from "./DropTarget"

export default class GameMat extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            // <DropTraget onDrop={this.onCardDropped} style={{ ...this.props.style, "border": "2px red solid", display: "flex" }}>
            // <div style={{flexGrow: 1}}></div>
            <div style={{ ...this.props.style, "border": "2px red solid"}}></div>
            // </DropTraget>
        )
    }
}