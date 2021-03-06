import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import Store from "./store/Store";
import {Provider} from 'react-redux'


ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

