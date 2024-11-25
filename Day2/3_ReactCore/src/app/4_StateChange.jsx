import React, { Component } from 'react';

class StateChangeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { id: 1, count: 1 };
    }

    handleClick() {
        // console.log(this.state);
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                <h3>Id: {this.state.id}</h3>
                <h3>Count: {this.state.count}</h3>
                <button className="btn btn-info" onClick={this.handleClick.bind(this)}>Click</button>
            </div>
        );
    }
}

export default StateChangeComponent;