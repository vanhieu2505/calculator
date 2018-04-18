import React, { Component } from 'react';

class Number extends Component {
    onClick(number, event) {

    }

    render() {
        return (
            <div className={this.props.big === "true" ? "number double" : "number single"} onClick={this.onClick.bind(this, this.props.number)}>{this.props.number}</div>
        );
    }
}

export default Number;