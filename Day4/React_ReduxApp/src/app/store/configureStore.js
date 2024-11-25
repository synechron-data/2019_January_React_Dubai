// 1. Simple Configuration
// import { createStore } from 'redux';
// import rootReducer from '../reducers/index';

// export default function configureStore(preloadedState) {
//     return createStore(rootReducer, preloadedState);
// };

// // 2. Thunk Configuration
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// import rootReducer from '../reducers/index';

// export default function configureStore(preloadedState) {
//     return createStore(rootReducer, preloadedState, applyMiddleware(thunk));
// };

// 3. With Redux Devtools
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';

export default function configureStore(preloadedState) {
    return createStore(rootReducer, preloadedState,
        composeWithDevTools(applyMiddleware(thunk)));
};