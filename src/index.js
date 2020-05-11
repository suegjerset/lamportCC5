import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// put your reducer here!


const storeInstance = createStore( )

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
