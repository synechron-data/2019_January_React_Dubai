import React, { Component } from 'react';

class HelloWithProps extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    
    render() {
        return (
            <div>
                <h2 className="text-info">Hello, {this.props.name}</h2>
                <h2 className="text-info">Company is, {this.props.company}</h2>
            </div>
        );
    }
}

export default HelloWithProps;