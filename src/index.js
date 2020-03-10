import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Dialogs from "./components/Dialogs/Dialogs";

let posts = [
    {id: 1, message: 'Im beagle', likes:15},
    {id: 2, message: "i love people",likes:23},
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: "Hi"},
    {id: 3, message: "Hi"},
    {id: 4, message: "Hi"},
    {id: 5, message: "Hi"},
    {id: 6, message: "Hi"}
]

let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Viktor"},
    {id: 6, name: "Valera"}
]



ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
