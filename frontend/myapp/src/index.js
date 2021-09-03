import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import todosReducer from "./redux/reducer/todosReducer";
import thunk from 'redux-thunk';
import createSagaMiddlevare from 'redux-saga';

const sagaMiddlevare = createSagaMiddlevare();

const store = createStore(todosReducer, composeWithDevTools(applyMiddleware(thunk, sagaMiddlevare)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
