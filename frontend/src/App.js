import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SignIn from "./SignIn";
import Book from "./book";
import MyBooking from "./MyBooking";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/book" component={Book} />
        <Route path="/myBooking" component={MyBooking} />
      </Switch>
    </Router>
  );
}

export default App;
