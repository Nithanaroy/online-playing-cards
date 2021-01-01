import React from "react"
import Player from "./Player";

export default class RemotePlayer extends Player {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                <div>PHOTO</div>
                <p>{this.props.name}</p>
            </div>
        )
    }
}