import React, { Component } from 'react';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';

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