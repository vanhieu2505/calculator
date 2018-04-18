import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Result extends Component {
    render () {
        return (
            <div className="result">
                {this.props.renderingNumber}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    renderingNumber: state.calState.renderingNumber
});

Result.propTypes = {
    renderingNumber: PropTypes.number.isRequired
}

export default connect(mapStateToProps, {})(Result);