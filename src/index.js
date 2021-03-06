import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './store/reducers/reducer';
import { BrowserRouter } from "react-router-dom";

const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(reducer, enhancers);

ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
  <React.StrictMode>
    <App />
        </React.StrictMode>
        </Provider>
    </BrowserRouter>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
