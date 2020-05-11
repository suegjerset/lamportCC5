import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

// put your reducer here!
const firstReducerInitialState = {
    speed: 0,
    passengers: []
}

const firstReducer = ( state = firstReducerInitialState, action ) => {
    console.log( 'in reducer', state, action.payload );
    if (action.type === 'increase') {
        console.log('increase:', action.payload);
        return { ...state, speed: state.speed + action.payload};
    } else if (action.type === 'decrease') {
        console.log('decrease:', action.payload);
        return { ...state, speed: state.speed - action.payload };
    } else if (action.type === 'passenger') {
        console.log( 'passenger:', action.payload);
        return {...state,
            passengers: [...state.passengers, action.payload]};
    }
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
