import React, { Component } from 'react';

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

export default Operator;