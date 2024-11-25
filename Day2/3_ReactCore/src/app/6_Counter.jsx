import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0, clickCount: 0, flag: false };
        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
        this.reset = this.reset.bind(this);
    }

    manageClickCount() {
        this.setState({ clickCount: this.state.clickCount + 1 }, function () {
            if (this.state.clickCount > 9) {
                this.setState({ flag: true }, function () {
                    this.props.onMax(this.state.flag);
                });
            }
        });
    }

    reset() {
        this.setState({ count: 0, clickCount: 0, flag: false }, function () {
            this.props.onMax(this.state.flag);
        });
    }

    inc() {
        this.manageClickCount();
        this.setState({ count: this.state.count + this.props.interval });
    }

    dec() {
        this.manageClickCount();
        this.setState({ count: this.state.count - this.props.interval });
    }

    render() {
        return (
            <div>
                <div className="row">
                    {this.props.children}
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <input type="text" className="form-control" value={this.state.count} readOnly />
                    </div>
                    <div className="col-sm-1">
                        <button className="btn btn-info btn-block" onClick={this.inc} disabled={this.state.flag}>+</button>
                    </div>
                    <div className="col-sm-1">
                        <button className="btn btn-info btn-block" onClick={this.dec} disabled={this.state.flag}>-</button>
                    </div>
                    <div className="col-sm-2">
                        <button className="btn btn-info btn-block" onClick={this.reset} disabled={!this.state.flag}>Reset</button>
                    </div>
                </div>
            </div>
        );
    }

    // static get defaultProps() {
    //     return {
    //         interval: 1
    //     };
    // }
}

Counter.defaultProps = {
    interval: 1
}

class CounterRoot extends Component {
    constructor(props) {
        super(props);
        this.state = { message: "" };
        this.childRef = React.createRef();
        this.p_reset = this.p_reset.bind(this);
    }

    p_reset(e) {
        // console.log(this.childRef);
        this.childRef.current.reset(e);
    }

    maxedOut(flag) {
        if (flag)
            this.setState({ message: "Max Click Reached, click Reset..." });
        else
            this.setState({ message: "" });
    }

    render() {
        return (
            <div>
                <h2 className="alert alert-danger">{this.state.message}</h2>
                <Counter ref={this.childRef} onMax={this.maxedOut.bind(this)}>
                    <h2 className="text-info">Counter with default Interval</h2>
                </Counter>
                <br />
                <div className="row">
                    <div className="col-md-2">
                        <button className="btn btn-warning btn-block" onClick={this.p_reset}>Parent Reset</button>
                    </div>
                </div>
                {/* <Counter interval={10}>
                    <h2 className="text-info">Counter with Interval as 10</h2>
                </Counter>
                <Counter interval={5}>
                    <h2 className="text-info">Counter with Interval as 5</h2>
                </Counter>
                <Counter>
                    <h2 className="text-info">Counter with default Interval</h2>
                </Counter> */}
            </div>
        );
    }
}

export default CounterRoot;