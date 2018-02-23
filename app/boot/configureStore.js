import { createStore } from 'redux';
import reducers from '../reducers';

export default function configStore(initComplete: Function) {
    const store = createStore(reducers);
    initComplete();
    return store;
};

