import React from "react"
import PropTypes from 'prop-types';

export default class Player extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return ""
    }
}

Player.propTypes = {
    "id": PropTypes.string.isRequired
}