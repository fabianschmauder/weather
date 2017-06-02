import React from "react";
import Main from "../components/layouts/Main";

import MainView from "../components/layouts/Main";
import {browserHistory, IndexRedirect, Route, Router} from "react-router";

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRedirect to="/main" />
            <Route path="main" component={MainView}> </Route>
        </Route>
    </Router>
);