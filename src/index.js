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
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <Switch>
        <Route exact path="/login" >
          <Login />
        </Route>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

function PrivateRoute({children}) {
  let auth = localStorage.getItem('token');
  return (
    <Route
      exact 
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