import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

// put your reducer here!
const firstReducerInitialState = {};

const firstReducer = ( state = firstReducerInitialState, action ) => {
    console.log( 'in reducer' );
    return state;
}

// use reducer in store
const storeInstance = createStore( firstReducer );

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root')
    );
