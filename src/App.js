
import React, {createContext, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import CreateEvent from './Components/CreateEvent/CreateEvent';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route exact path="/home">
            <Home />
          </Route>
          <PrivateRoute exact path="/create-event">
            <CreateEvent />
          </PrivateRoute>

          <PrivateRoute exact path="/events">
            <Redirect to="/create-event" />
          </PrivateRoute>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
