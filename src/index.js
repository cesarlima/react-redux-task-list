import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import multi from 'redux-multi'

import App from './App';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';

import reducer from './task/reducers/index'
import './index.css'

const store = applyMiddleware(thunk, multi)(createStore)(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
