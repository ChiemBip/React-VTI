import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from './commem/hello';

// bai 1
// const name = "Chien";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//  React.createElement("h1", {style:{textAlign: "center"}},name)
// );
//bai 2
// const name = "Your nameasass";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<h1 style={{ textAlign: "center" }}>{name}</h1>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// React + jsx
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Hello/>);



