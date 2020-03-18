import React from 'react';
import { Switch, Route } from 'react-router';
import Phones from "../Phones";

const Layout = () => {
  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            sidebar
          </div>
          <div className="col-md-9">
            <Switch>
              <Route path="/" component={Phones} exact/>
              <Route path="/basket" component={Phones}/>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
