import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import logger from "redux-logger";
import promise from "redux-promise";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";

const store = createStore(
    reducers,
    {},
    applyMiddleware(reduxThunk, promise,logger)
)


ReactDOM.render(

    <Provider store = {store}>
        <App />
    </Provider>
    
    , document.getElementById('root'));
registerServiceWorker();
