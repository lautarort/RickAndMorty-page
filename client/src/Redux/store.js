import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer/index.js';
import { composeWithDevTols } from 'redux-devtools-extension';

const store = createStore(
    reducer,
    composeWithDevTols(applyMiddleware(thunk))
);

export default store;