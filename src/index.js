import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/login" >
        <Login />
      </Route>
      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </Switch>
  </Router>,
  document.getElementById('root')
);

function PrivateRoute({children}) {
  let auth = localStorage.getItem('authToken');
  return (
    <Route
      render={() =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        )
      }
    />
  );
}