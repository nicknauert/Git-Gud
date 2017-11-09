import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom";
import configureStore from "./store";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <HashRouter >
            <App />
        </HashRouter >
    </ Provider>,
    document.getElementById('root'));
registerServiceWorker();
