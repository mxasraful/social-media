import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ErrorPg from './components/ErrorPg/ErrorPg';
import Login from './components/Login/Login';
import UserPage from './components/UserPage/UserPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/videos">
          <Header />
          <div className='with-out-header'>
            <Home />
          </div>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/groups">
          <Header />
          <div className='with-out-header'>
            <Home />
          </div>
        </Route>
        <Route path="/user/:username">
          <Header />
          <div className='with-out-header'>
            <UserPage />
          </div>
        </Route>
        <Route path="/user/:username/:profile-tab">
          <Header />
          <div className='with-out-header'>
            <UserPage />
          </div>
        </Route>
        <Route exact path="/">
          <Header />
          <div className='with-out-header'>
            <Home />
          </div>
        </Route>
        <Route path="*">
          <Header />
          <div className='with-out-header'>
            <ErrorPg />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
