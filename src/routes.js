import {Route, Switch} from "react-router";
import Phones from "./containers/Phones";
import React from "react";
import Phone from "./containers/Phone";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Phones} exact/>
      <Route path="/categories/:id" component={Phones}/>
      <Route path="/phones/:id" component={Phone}/>
    </Switch>
  );
};

export default Routes;
