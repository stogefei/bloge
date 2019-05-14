import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app/App';

import {Provider} from 'react-redux'; // 组件
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './store/index';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
//判断调试工具是否存在
const reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
// 调试工具
const store = createStore(reducers,
    compose(applyMiddleware(thunk), reduxDevTools));

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render((<Provider store={store}>
    <App />
</Provider>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
