import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, combineReducers} from 'redux';
import {Provider as ReduxProvider} from 'react-redux';
import counterReducer from './store/reducers/reducer';
import resultReducer from './store/reducers/resultReducer';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer,
})
const store = createStore(rootReducer)

ReactDOM.render(<ReduxProvider store={store}><App /></ReduxProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
