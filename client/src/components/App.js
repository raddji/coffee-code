import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import CoffeeShopIndexPage from "./CoffeeShopIndexPage"
import CoffeeShopShowPage from "./CoffeeShopShowPage";
import { Link } from 'react-router-dom'

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser()
      setCurrentUser(user)
    } catch (err) {
      setCurrentUser(null)
    }
  }

  useEffect(() => {
    fetchCurrentUser()
  }, [])

  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/">
        <Link to={`/coffee-shops`} className="react-link">
          <div className="list tiles landing-page">
            <h2>Welcome to JavaSipped!</h2>
            <div className="landing-paragraph">
              <p>A place for coders who love coffee and want to share their favorite code brew spots</p>
            </div>
          </div>
        </Link>
          
        </Route>
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
        <Route exact path="/coffee-shops" component={CoffeeShopIndexPage}/>
        <Route exact path="/coffee-shops/:id" component={CoffeeShopShowPage}/>
      </Switch>
    </Router>
  );
};

export default hot(App);
