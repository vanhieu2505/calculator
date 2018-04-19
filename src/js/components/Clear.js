import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clickClear } from '../actions/calculatorActions';
import PropTypes from 'prop-types';

class Clear extends Component {
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

    onMouseUp(e) {
        this.setState({
            selected: false
        });
        this.props.clickClear();
    }
    
    render() {
        return (
            <div className={this.state.selected ? "clear triple selected" : "clear triple"}
                onMouseDown={this.onMouseDown.bind(this)}
                onMouseUp={this.onMouseUp.bind(this)}>
                Clear
            </div>
        );
    }
}

Clear.propTypes = {
    clickClear: PropTypes.func.isRequired
};

export default connect(null, { clickClear })(Clear);