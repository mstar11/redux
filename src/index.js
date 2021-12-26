import React from 'react';
import ReactDOM from 'react-dom';
import "./bootstrap.css"
import reportWebVitals from './reportWebVitals';
import App2 from './App2';
import {Provider} from 'react-redux';
import store2 from "./store2"
// import store from './store'
// import App from './App';

ReactDOM.render(
  <Provider store={store2}>
    <App2 />
  </Provider>,
  document.getElementById('root')
  );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
