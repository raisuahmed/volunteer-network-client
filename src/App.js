
import React, {createContext, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import VolenteerRegistration from './Components/VolunteerRegistration/VolenteerRegistration';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Login from './Components/Login/Login';
import Admin from './Components/Admin/Admin';
import EventTasks from './Components/EventTasks/EventTasks';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import CreateEvent from './Components/CreateEvent/CreateEvent';



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
          
          <PrivateRoute exact path="/vregistration/:id">
            <VolenteerRegistration />
          </PrivateRoute>
          
          <PrivateRoute exact exact path="/event">
            <EventTasks />
          </PrivateRoute>

          <Route exact path="/login">
            <Login />
          </Route>

          <PrivateRoute exact path="/admin">
            <Admin />
          </PrivateRoute>

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
