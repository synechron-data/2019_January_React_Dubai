import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PTComponent extends Component {
    render() {
        var n = this.props.name.toUpperCase();
        return (
            <div>
                <h3 className="text-info">Hello, {n}</h3>
                <h3 className="text-info">Age is, {this.props.age}</h3>
            </div>
        );
    }
}

PTComponent.propTypes = {
    name: PropTypes.string.isRequired,
    // age: PropTypes.number.isRequired
    age: function (props, propName, componentName) {
        if (props[propName] < 30) {
            return new Error(componentName + " ------ " + propName + ", must be greater than 30.");
        }
    }
};

class PTRoot extends Component {
    render() {
        return (
            <div>
                <PTComponent name={"Manish"} age={10} />
                <br/>
                {/* <PTComponent /> */}
            </div>
        );
    }
}

export default PTRoot;