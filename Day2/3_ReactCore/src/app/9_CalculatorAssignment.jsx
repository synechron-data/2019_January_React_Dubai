import React, { Component } from 'react';

class CalculatorOne extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { data: { t1: 0, t2: 0 }, result: 0 };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ result: parseInt(this.refs.t1.value) + parseInt(this.refs.t2.value) });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Calculator Assignment</legend>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="t1">Number One</label>
                            <input type="text" className="form-control" defaultValue={this.state.data.t1}
                                ref="t1" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="t2">Number Two</label>
                            <input type="text" className="form-control" defaultValue={this.state.data.t2}
                                ref="t2" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <h3>Result: {this.state.result}</h3>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-3">
                            <button type="submit" className="btn btn-success btn-block">Add</button>
                        </div>
                        <div className="col-md-3">
                            <button type="reset" className="btn btn-primary btn-block">Reset</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        );
    }
}

class CalculatorTwo extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.state = { data: { t1: 0, t2: 0 }, result: 0 };
    }

    handleChange1(e) {
        var obj = Object.assign({}, this.state.data);
        obj.t1 = e.target.value;
        this.setState({ data: obj });
    }

    handleChange2(e) {
        var obj = Object.assign({}, this.state.data);
        obj.t2 = e.target.value;
        this.setState({ data: obj });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ result: parseInt(this.state.data.t1) + parseInt(this.state.data.t2) });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Calculator Assignment</legend>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="t1">Number One</label>
                            <input type="text" className="form-control" value={this.state.data.t1}
                                onChange={this.handleChange1} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="t2">Number Two</label>
                            <input type="text" className="form-control" value={this.state.data.t2}
                                onChange={this.handleChange2} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <h3>Result: {this.state.result}</h3>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-3">
                            <button type="submit" className="btn btn-success btn-block">Add</button>
                        </div>
                        <div className="col-md-3">
                            <button type="reset" className="btn btn-primary btn-block">Reset</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        );
    }
}

class CalculatorThree extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = { data: { t1: 0, t2: 0 }, result: 0 };
    }

    handleChange(e) {
        const field = e.target.id;
        var obj = Object.assign({}, this.state.data);
        obj[field] = e.target.value;
        this.setState({ data: obj });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ result: parseInt(this.state.data.t1) + parseInt(this.state.data.t2) });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Calculator Assignment</legend>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="t1">Number One</label>
                            <input type="text" className="form-control" id="t1" value={this.state.data.t1}
                                onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="t2">Number Two</label>
                            <input type="text" className="form-control" id="t2" value={this.state.data.t2}
                                onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <h3>Result: {this.state.result}</h3>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-3">
                            <button type="submit" className="btn btn-success btn-block">Add</button>
                        </div>
                        <div className="col-md-3">
                            <button type="reset" className="btn btn-primary btn-block">Reset</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        );
    }
}

class TextInput extends Component {
    render() {
        return (
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor={this.props.name}>{this.props.label}</label>
                    <input type="text" className="form-control" id={this.props.name} name={this.props.name}
                        value={this.props.value} onChange={this.props.onChange} />
                </div>
            </div>
        );
    }
}


class CalculatorFour extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = { data: { t1: 0, t2: 0 }, result: 0 };
    }

    handleChange(e) {
        const field = e.target.id;
        var obj = Object.assign({}, this.state.data);
        obj[field] = e.target.value;
        this.setState({ data: obj });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ result: parseInt(this.state.data.t1) + parseInt(this.state.data.t2) });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Calculator Assignment</legend>
                    <TextInput label={"Number One"} name={"t1"} onChange={this.handleChange}
                        value={this.state.data.t1} />
                    <TextInput label={"Number Two"} name={"t2"} onChange={this.handleChange}
                        value={this.state.data.t2} />
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <h3>Result: {this.state.result}</h3>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-3">
                            <button type="submit" className="btn btn-success btn-block">Add</button>
                        </div>
                        <div className="col-md-3">
                            <button type="reset" className="btn btn-primary btn-block">Reset</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        );
    }
}

class CalculatorAssignment extends Component {
    render() {
        return (
            <div>
                {/* <CalculatorOne /> */}
                {/* <CalculatorTwo /> */}
                {/* <CalculatorThree /> */}
                <CalculatorFour />
            </div>
        );
    }
}

export default CalculatorAssignment;