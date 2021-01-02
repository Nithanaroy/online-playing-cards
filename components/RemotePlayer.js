import React from "react"
import Player from "./Player";

export default class RemotePlayer extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <Player id={this.props.id} style={{...this.props.style, "display": "flex"}}>
                <div style={{"border": "2px orange solid", flexGrow: 1}}>
                    <div>PHOTO</div>
                    <p>{this.props.name}</p>
                </div>
            </Player>
        )
    }
}