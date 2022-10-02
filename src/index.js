import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from "./style/custom.scss"
import $ from 'jquery';
import Popper from 'popper.js';
import './index.css';
import {App} from './App/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />,
);

