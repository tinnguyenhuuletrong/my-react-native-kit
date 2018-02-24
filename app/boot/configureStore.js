import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import reducers from '../reducers';

export default function configStore(initComplete: Function) {
    const store = createStore(
        reducers,
        applyMiddleware(promiseMiddleware)
    );
    initComplete();
    return store;
};

