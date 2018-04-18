import React, { Component } from 'react';

class Operator extends Component {
    onClick(operatore, event) {

    }

    render() {
        return (
            <div className="operator single" onClick={this.onClick.bind(this, this.props.operator)}>{this.props.operator}</div>
        );
    }
}

export default Operator;