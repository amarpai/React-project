import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider as ReduxProvider} from 'react-redux';
import counterReducer from './store/reducers/reducer';
import resultReducer from './store/reducers/resultReducer';
import { compose } from '@material-ui/system';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer,
})

const logger = store =>{
    return next =>{
        return action => {
            console.log("[Middleware] Dispatching", action)
            const result = next(action)
            console.log("[Middleware] Next State" , store.getState())
            return result
        };
    };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, logger)));

ReactDOM.render(<ReduxProvider store={store}><App /></ReduxProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
