import React, { Component } from 'react';

class HelloWithState extends Component {
    constructor() {
        super();
        // console.log(this.state);
        this.state = { name: "Synechron" };
    }

    render() {
        return (
            <div>
                <h2 className="text-info">Hello, {this.state.name}</h2>
            </div>
        );
    }
}

export default HelloWithState;