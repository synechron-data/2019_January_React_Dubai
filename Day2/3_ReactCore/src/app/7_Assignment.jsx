import React, { Component } from 'react';

class Result extends Component {
    render() {
        return (
            <h2 className="text-info">Result: {this.props.count}</h2>
        );
    }
}

class Button extends Component {
    render() {
        return (
            <button className="btn btn-info" onClick={(e) => {
                this.props.handleClick(this.props.incBy, e);
            }}>
                Add {this.props.incBy}
            </button>
        );
    }
}

class AssignmentRoot extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.updateCount = this.updateCount.bind(this);
    }

    updateCount(by) {
        this.setState({ count: this.state.count + by });
    }

    render() {
        return (
            <div>
                <Result count={this.state.count} />
                <Button incBy={5} handleClick={this.updateCount} />
                <Button incBy={10} handleClick={this.updateCount} />
                <Button incBy={15} handleClick={this.updateCount} />
                <Button incBy={20} handleClick={this.updateCount} />
            </div>
        );
    }
}

export default AssignmentRoot;