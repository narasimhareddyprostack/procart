import React from "react";
import Navbar from "./modules/layout/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//imporint all mobule Components

import Mobiles from "./modules/products/components/Mobiles";
import Laptops from "./modules/products/components/Laptops";
import Watches from "./modules/products/components/Watches";
import Upload from "./modules/products/components/Upload";
import Cart from "./modules/order/components/Cart";
import Login from "./modules/user/components/Login";
import Signup from "./modules/user/components/Signup";
import Profile from "./modules/user/components/Profle";
let App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/mobiles" component={Mobiles} />
          <Route exact path="/laptops" component={Laptops} />
          <Route exact path="/watches" component={Watches} />

          <Route exact path="/upload" component={Upload} />
          <Route exact path="/cart" component={Cart} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};
export default App;
