import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.js';
// import $ from 'jquery';
// import Popper from 'popper.js';
import "font-awesome/css/font-awesome.css";
import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
);
