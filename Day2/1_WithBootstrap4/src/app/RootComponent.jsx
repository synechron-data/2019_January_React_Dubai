import React, { Component } from 'react';
import ComponentOne from './comp-one/ComponentOne';
import ComponentTwo from './comp-two/ComponentTwo';

class RootComponent extends Component {
    render() {
        return (
            <div>
                <ComponentOne/>
                <ComponentTwo/>
            </div>
        );
    }
}

export default RootComponent;