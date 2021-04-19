import React from "react";
import Home from "./Home";
import App from "./App";
import Series from "./Series";
import { BrowserRouter, withRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

function Rutas() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={withRouter(Home)} />
        <Route exact path="/app" component={withRouter(App)} />
        <Route exact path="/series" component={withRouter(Series)} />
      </Switch>
    </BrowserRouter>
  );
}
export default Rutas;
