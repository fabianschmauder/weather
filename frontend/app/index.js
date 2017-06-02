import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory, Router} from "react-router";
import routes from "./routes/routes";
import {Provider} from "react-redux";
import store from "./store/store";

let app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    app
);