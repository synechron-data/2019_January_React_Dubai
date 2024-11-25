import React, { Component } from 'react';

import styles from './ComponentOne.css';

class ComponentOne extends Component {
    render() {
        return (
            <h1 className={`${styles.card} text-info`}>Hello From Component One!</h1>
        );
    }
}

export default ComponentOne;