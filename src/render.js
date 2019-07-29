import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import './index.css';
import {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state ={state} addPost = {addPost}/>
        </BrowserRouter>,
        document.getElementById('root'));
}
