// Adapted from https://github.com/Khan/react-components/blob/024a865b5ca083906aa7939a936bc53643db8ce9/js/drag-target.jsx

import React from 'react';
import PropTypes from 'prop-types';

export default class DropTarget extends React.Component {
    constructor(props) {
        super(props)
        this.state = { dragHover: false };
    }
    handleDrop = (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.setState({ dragHover: false });
        this.props.onDrop(e);
    }
    handleDragEnd = () => {
        this.setState({ dragHover: false });
    }
    handleDragOver = (e) => {
        e.preventDefault();
    }
    handleDragLeave = () => {
        this.setState({ dragHover: false });
    }
    handleDragEnter = (e) => {
        this.setState({ dragHover: this.props.shouldDragHighlight(e) });
    }
    render() {
        const opacity = this.state.dragHover ? { "opacity": 0.3 } : {};
        const Component = this.props.component;

        const forwardProps = { ...this.props };
        delete forwardProps.component;
        delete forwardProps.shouldDragHighlight;

        return (
            <Component
                {...forwardProps}
                style={{ ...this.props.style, ...opacity }}
                onDrop={this.handleDrop}
                onDragEnd={this.handleDragEnd}
                onDragOver={this.handleDragOver}
                onDragEnter={this.handleDragEnter}
                onDragLeave={this.handleDragLeave}
            />
        );
    }
}

DropTarget.defaultProps = {
    component: "div",
    shouldDragHighlight: () => true
}

DropTarget.propTypes = {
    // All props not listed here are forwarded to the root element without
    // modification.
    onDrop: PropTypes.func.isRequired,
    component: PropTypes.any,  // component type
    shouldDragHighlight: PropTypes.func,
    style: PropTypes.any,
}