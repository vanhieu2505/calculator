import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clickOperator } from '../actions/calculatorActions';

class Operator extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            selected: false
        });
    }

    onMouseDown(e) {
        this.setState({
            selected: true
        });
    }

    onMouseUp(operator, e) {
        this.setState({
            selected: false
        });
        this.props.clickOperator(operator);
    }

    render() {
        return (
            <div className={this.state.selected ? "operator single selected" : "operator single"}
                onMouseDown={this.onMouseDown.bind(this)}
                onMouseUp={this.onMouseUp.bind(this, this.props.operator)}>
                {this.props.operator}
            </div>
        );
    }
}

Operator.propTypes = {
    clickOperator: PropTypes.func.isRequired
};

export default connect(null, { clickOperator })(Operator);