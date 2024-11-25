import '../public/favicon.ico';

import React from 'react';
import ReactDOM from 'react-dom';

import ComponentOne from './app/ComponentOne';
import ComponentTwo from './app/ComponentTwo';

ReactDOM.render(<ComponentOne />, document.getElementById("container1"));
ReactDOM.render(<ComponentTwo />, document.getElementById("container2"));

ReactDOM.render(<div>
    <ComponentOne></ComponentOne>
    <ComponentTwo></ComponentTwo>
</div>, document.getElementById("container3"));
