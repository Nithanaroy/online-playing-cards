import React from "react"

export default class RemotePlayer extends React.Component {
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