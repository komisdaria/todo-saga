import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import todosReducer from "./redux/reducer/todosReducer";
import thunk from 'redux-thunk';
import createSagaMiddleware from "redux-saga";
import {todoWatcher} from './redux/saga/todoSaga'
const sagaMiddleware = createSagaMiddleware();

const store = createStore(todosReducer, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)));

sagaMiddleware.run(todoWatcher);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
