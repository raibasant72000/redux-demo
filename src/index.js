import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux' // helps to create store
import {Provider} from 'react-redux' // helps to wrap the app. This helps to share the redux data to react.The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.
import rootReducer from './services/Reducers/index';
const store=createStore(rootReducer)
console.warn("store data:",store)
ReactDOM.render(
    <Provider store={store}> 
    <App/> 
    </Provider>,
    document.getElementById('root')
);