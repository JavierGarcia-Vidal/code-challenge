import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "../components/App";
import List from "../components/pages/List";
import Detail from "../components/pages/Detail";
import Add from "../components/pages/Add";
import Update from "../components/pages/Update";

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={List} />
    <Route path="/add" component={Add} />
    <Route path="/:id" component={Detail} />
    <Route path="/update/:id" component={Update} />
  </Route>
);
