import React, { Component } from 'react';

import styles from './ComponentTwo.css';

class ComponentTwo extends Component {
    render() {
        return (
            <h1 className={`${styles.card} text-success`}>Hello From Component Two!</h1>
        );
    }
}

export default ComponentTwo;