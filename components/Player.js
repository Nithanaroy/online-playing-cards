import React from "react"
import PropTypes from 'prop-types';

export default class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={{...this.props.style}} id={this.props.id}>
                {this.props.children}
            </div>
        )
    }
}

Player.propTypes = {
    "id": PropTypes.string.isRequired
}