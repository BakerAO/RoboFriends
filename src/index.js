import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import 'tachyons';

// import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import { searchRobots, requestRobots } from './reducers.js';
import App from './containers/App.js';

const rootReducer = combineReducers({ requestRobots, searchRobots });
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

//  registerServiceWorker();
