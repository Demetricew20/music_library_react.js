import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';

const jsxElement = <h1>Our React App</h1>;
console.log(jsxElement);

ReactDom.render(<App/>, document.getElementById('root'));

