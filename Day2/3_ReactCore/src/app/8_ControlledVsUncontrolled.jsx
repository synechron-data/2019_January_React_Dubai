import React, { Component } from 'react';

class ControlledVsUncontrolled extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "Ram" };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log(e.target.value);
        this.setState({ name: e.target.value });
    }

    handleClick(e){
        this.setState({ name: this.refs.t1.value });
    }

    render() {
        return (
            <div>
                <input type="text" value="Manish" readOnly />
                <br />
                <input type="text" defaultValue="Manish" />
                <br />
                <input type="text" value={this.state.name} readOnly />
                <br />
                <input type="text" defaultValue={this.state.name} />
                <br />
                <input type="text" value={this.state.name} onChange={this.handleChange} />
                <h3>Hello, {this.state.name}</h3>
                <hr/>
                <input type="text" ref="t1"/>
                <br/>
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}

export default ControlledVsUncontrolled;