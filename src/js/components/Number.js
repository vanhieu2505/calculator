import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clickNumber } from '../actions/calculatorActions';

class Number extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };
    }

    onMouseDown(e) {
        this.setState({
            selected: true
        });
    }

    onMouseUp(number, e) {
        this.setState({
            selected: false
        });
        this.props.clickNumber(number);
    }

    render() {
        let className = this.props.big === "true" ? "number double" : "number single";
        if (this.state.selected) {
            className = className + " selected";
        }

        return (
            <div className={className} 
                onMouseDown={this.onMouseDown.bind(this)}
                onMouseUp={this.onMouseUp.bind(this, this.props.number)}>
                {this.props.number}
            </div>
        );
    }
}

export default connect(null, { clickNumber })(Number);